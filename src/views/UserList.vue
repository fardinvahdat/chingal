<template>
  <div class="w-full relative">
    <Loading v-if="isLoading" />
    <div class="user-list">
      <div
        class="flex justify-content-between py-4 align-items-center w-full head"
      >
        <div class="action">
          <button type="button" @click="isDialogVisible = !isDialogVisible">
            کاربر جدید
          </button>
        </div>
        <BreadCrumb class="bread-crumb" :list="breadcrumbList" />
      </div>
      <BaseTable :list="store.users" />
    </div>
    <Dialog
      v-model:visible="isDialogVisible"
      :modal="true"
      contentClass="register-user"
      :showHeader="false"
    >
      <h3
        class="
          text-right
          flex
          align-items-center
          justify-content-end
          gap-2
          header
        "
      >
        کاربر جدید
        <i class="pi pi-times" @click="isDialogVisible = false"></i>
      </h3>
      <form class="wrapper" @submit.prevent="addNewUser">
        <div class="avatar-section">
          <AvatarLogo v-if="user.avatar == ''" />
          <img :src="user.avatar" v-else alt="" />
          <input type="file" class="hidden" @change="avatarChangeHandler" />
        </div>
        <div class="flex">
          <div class="input-box col">
            <label for="age">سن</label>
            <input
              type="number"
              id="age"
              name="age"
              v-model="user.age"
              placeholder="سن کاربر جدید را وارد کنید"
            />
          </div>
          <div class="input-box col">
            <label for="name">نام کاربر</label>
            <input
              type="text"
              id="name"
              name="name"
              v-model="user.name"
              placeholder="نام کاربر جدید را وارد کنید"
            />
          </div>
        </div>
        <div class="flex">
          <div class="input-box col">
            <label for="phoneNumber">شماره تلفن</label>
            <input
              type="tell"
              id="phoneNumber"
              name="phoneNumber"
              v-model="user.phoneNumber"
              placeholder="شماره تلفن کاربر جدید را وارد کنید"
            />
          </div>
          <div class="input-box col">
            <label for="email">ایمیل</label>
            <input
              type="email"
              id="email"
              name="email"
              v-model="user.email"
              placeholder="ایمیل کاربر جدید را وارد کنید"
            />
          </div>
        </div>
        <div class="flex">
          <div class="input-box col-3">
            <label for="postalCode">کد</label>
            <input
              type="number"
              name="postalCode"
              v-model="user.postalCode"
              placeholder="کد"
            />
          </div>
          <div class="input-box col-3">
            <label for="street">خیابان</label>
            <input
              type="text"
              name="street"
              v-model="user.street"
              placeholder="نام خیابان"
            />
          </div>
          <div class="input-box col-3">
            <label for="city">شهر</label>
            <input
              type="text"
              name="city"
              v-model="user.city"
              placeholder="نام شهر"
            />
          </div>
          <div class="input-box col-3">
            <label for="country">کشور</label>
            <input
              type="text"
              name="country"
              v-model="user.country"
              placeholder="نام کشور"
            />
          </div>
        </div>
        <div class="flex">
          <div class="input-box col w-full">
            <label for="company">شرکت</label>
            <input
              type="text"
              name="company"
              v-model="user.company"
              placeholder="نام شرکت کاربر جدید را وارد کنید"
            />
          </div>
        </div>
        <div class="flex actions">
          <div class="col">
            <button type="submit" class="submit">تایید</button>
          </div>
          <div class="col">
            <button type="submit" @click="isDialogVisible = false">
              انصراف
            </button>
          </div>
        </div>
      </form>
    </Dialog>
  </div>
</template>

<script setup>
import BaseTable from "@/components/table/BaseTable.vue";
import AvatarLogo from "@/assets/svg/Avatar.vue";
import BreadCrumb from "@/components/breadcrumbs/BreadCrumb.vue";
import Toast from "primevue/toast";
import { useRouter } from "vue-router";
import { useToast } from "primevue/usetoast";
import { ref, onMounted } from "vue";
import { useUserListStore } from "@/stores/userlist.js";
import axios from "axios";
onMounted(() => {
  getUserList();
});
const breadcrumbList = ref([
  {
    label: "لیست کاربران",
    link: "/userlist",
  },
]);
const store = useUserListStore();
const userList = ref();
const isLoading = ref(false);
const isDialogVisible = ref(false);
const toast = useToast();
const router = useRouter();
const user = ref({
  avatar: "",
  name: "",
  age: null,
  email: "",
  name: "",
  phoneNumber: null,
  country: "",
  city: "",
  street: "",
  postalCode: null,
});
const getUserList = async () => {
  isLoading.value = true;
  const response = await axios.get(
    `https://63c2988fe3abfa59bdaf89f6.mockapi.io/users`
  );
  userList.value = response;
  store.setUserList(response);
  userList.value.data.map((user) => {
    user.address = user.city + " ," + user.street;
  });
  isLoading.value = false;
};
const addNewUser = async () => {
  const url = "https://63c2988fe3abfa59bdaf89f6.mockapi.io/users/";
  isLoading.value = true;
  const response = await axios.post(url, {
    avatar: user.value.avatar,
    city: user.value.city,
    company: user.value.company,
    country: user.value.country,
    dateOfBirth: user.value.age + "",
    email: user.value.email,
    id: user.value.id,
    name: user.value.name,
    phoneNumber: user.value.phoneNumber,
    street: user.value.street,
    zipcode: user.value.postalCode + "",
  });
  isLoading.value = false;
  if (response.status == 200 || response.status == 201) {
    toast.add({
      severity: "success",
      summary: "موفق",
      detail: "ساحت کاربر با موفقیت انجام شد",
      life: 3000,
    });
    setTimeout(() => {
      router.push({
        name: "user",
        params: {
          id: response.data.id,
        },
      });
    }, 500);
  }
};
</script>

<style lang="scss">
.user-list {
  background: $mainBg;
  padding: 48px;
  min-height: 100vh;
  .head {
    .bread-crumb {
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      display: flex;
      align-items: center;
      color: $whiteTxt;
    }
    .action {
      button {
        padding: 16px 24px;
        background: #0559fd;
        border-radius: 16px;
        color: $whiteTxt;
        border: none;
        outline: none;
        cursor: pointer;
      }
    }
  }
}
.register-user {
  border-radius: 24px;
  background: linear-gradient(0deg, #020b1f, #020b1f),
    linear-gradient(204.09deg, #182040 0%, rgb(87 92 108) 84.55%) !important;
  box-shadow: 6px 24px 96px #48516e;
  backdrop-filter: blur(12px);
  width: 550px;
  padding: 40px !important;
  text-align: center;
  .header {
    color: $whiteTxt;
    font-size: 24px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: right;
    border-bottom: 2px solid #182040;
    padding-bottom: 20px;
    i {
      margin-left: 10px;
      font-size: 27px;
      cursor: pointer;
    }
  }
  .wrapper {
    text-align: center;
    .avatar-section {
      width: fit-content;
      padding: 10px;
      border-radius: 50%;
      border: 3px solid $primaryColor;
      margin: 2rem auto;
    }
    .input-box {
      text-align: right;
      input {
        width: 100%;
        text-align: right;
        margin: 5px 0;
        color: #fbfdfe;
        border: 1px solid #2f3756;
        font-size: 13px;
        font-weight: 400;
        line-height: 24px;
        letter-spacing: 0em;
        border-radius: 15px;
        background: transparent;
        padding: 10px;
        outline: none;
        &:focus {
          border: 1px solid $primaryColor;
        }
      }
    }
    .actions {
      margin-top: 2rem;
      button {
        background: $mainBg;
        color: $primaryColor;
        border: 1px solid $primaryColor;
        width: 100%;
        outline: none;
        padding: 16px 24px 16px 24px;
        border-radius: 15px;
        cursor: pointer;
        transition: 0.3s ease;
        &:hover {
          background: linear-gradient(0deg, #020b1f, #3b4250),
            linear-gradient(204.09deg, #ffffff 0%, rgb(24 32 64) 84.55%);
        }
        &.submit {
          background: $primaryColor;
          color: $whiteTxt;
          &:hover {
            background: linear-gradient(0deg, #0559fd, #3b4250),
              linear-gradient(204.09deg, #ffffff 0%, rgb(24 32 64) 84.55%);
          }
        }
      }
    }
  }
}
.p-dialog .p-dialog-content {
  color: #7e848e;
}
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
</style>