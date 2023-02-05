<template>
  <Toast />
  <div class="flex w-full flex-column container relative">
    <BreadCrumb class="bread-crumb" :list="breadcrumbList" />
    <Loading v-if="isLoading" />
    <div class="user mx-auto">
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
        ویرایش کاربر
      </h3>
      <form class="wrapper" @submit.prevent="editUser">
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
              disabled
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
              type="text"
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
            <button type="submit" @click="deleteUser">حذف</button>
          </div>
          <div class="col">
            <button type="submit" class="submit">ویرایش</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import BaseTable from "@/components/table/BaseTable.vue";
import AvatarLogo from "@/assets/svg/Avatar.vue";
import BreadCrumb from "@/components/breadcrumbs/BreadCrumb.vue";
import Toast from "primevue/toast";
import { useToast } from "primevue/usetoast";
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import axios from "axios";
const route = useRoute();
const router = useRouter();
const isLoading = ref(false);
const breadcrumbList = ref([
  {
    label: "لیست کاربران",
    link: "/userlist",
  },
  {
    label: "ویرایش کاربر",
    link: route.path,
  },
]);
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
const toast = useToast();
onMounted(() => {
  getUser();
});

const getUser = () => {
  isLoading.value = true;
  const id = route.params.id;
  const url = "https://63c2988fe3abfa59bdaf89f6.mockapi.io/users/";
  axios.get(url + id).then((response) => {
    let thisYear = new Date().getFullYear();
    let dateOfBirth = new Date(response.data.dateOfBirth).getFullYear();
    user.value = response.data;
    user.value.age = thisYear - dateOfBirth;
    user.value.postalCode = response.data.zipcode;
    isLoading.value = false;
  });
};
const editUser = async () => {
  isLoading.value = true;
  const id = route.params.id;
  const url = "https://63c2988fe3abfa59bdaf89f6.mockapi.io/users/";
  const response = await axios.put(url + id, {
    avatar: user.value.avatar,
    city: user.value.city,
    company: user.value.company,
    country: user.value.country,
    createdAt: user.value.createdAt,
    dateOfBirth: user.value.age,
    email: user.value.email,
    id: user.value.id,
    name: user.value.name,
    phoneNumber: user.value.phoneNumber,
    street: user.value.street,
    zipcode: user.value.postalCode,
  });

  isLoading.value = false;
  if (response.status == 200) {
    toast.add({
      severity: "success",
      summary: "موفق",
      detail: "ویرایش کاربر با موفقیت انجام شد",
      life: 3000,
    });
    setTimeout(() => {
      router.push({
        name: "userlist",
      });
    }, 500);
  }
};
const deleteUser = () => {
  isLoading.value = true;
  const url = "https://63c2988fe3abfa59bdaf89f6.mockapi.io/users/";
  let id = route.params.id;
  axios.delete(url + id).then((response) => {
    isLoading.value = false;
    setTimeout(() => {
      router.push({
        name: "userlist",
      });
    }, 1000);
    toast.add({
      severity: "success",
      summary: "موفق",
      detail: "کاربر مورد نظر با موفقیت حذف شد",
      life: 3000,
    });
  });
};
</script>

<style lang="scss" scoped>
.container {
  background: $mainBg;
}
.user {
  border-radius: 24px;
  background: linear-gradient(0deg, #020b1f, #020b1f),
    linear-gradient(204.09deg, #182040 0%, rgb(87 92 108) 84.55%) !important;
  box-shadow: 6px 24px 96px #48516e;
  backdrop-filter: blur(12px);
  width: 550px;
  padding: 40px !important;
  text-align: center;
  margin-top: 4rem;
  height: fit-content;
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
      margin: 2rem auto;
      img {
        border-radius: 50%;
        height: 112px;
        width: 112px;
        border: 3px solid $primaryColor;
        padding: 3px;
      }
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
        background: #ff3231;
        color: $whiteTxt;
        border: 1px solid #ff3231;
        width: 100%;
        outline: none;
        padding: 16px 24px 16px 24px;
        border-radius: 15px;
        cursor: pointer;
        transition: 0.3s ease;
        &:hover {
          background: linear-gradient(0deg, #cc0000, #3b4250),
            linear-gradient(204.09deg, #ffffff 0%, rgb(24 32 64) 84.55%);
        }
        &.submit {
          background: $primaryColor;
          border: 1px solid $primaryColor;
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
</style>