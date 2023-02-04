<template>
  <Toast />
  <div class="grid justify-content-center align-items-center" id="login">
    <div class="lg:col-5 md:col-6 col-11 text-center">
      <form class="wrapper" @submit.prevent="loginHandler">
        <h5>
          <img src="@/assets/svg/logo.svg" alt="" width="200" class="logo" />
        </h5>
        <h4 class="header">ورود به پنل چینگال</h4>
        <div class="field text-right">
          <label for="userName">نام کاربری</label>
          <input
            id="userName"
            type="text"
            placeholder="نام کاربری خود را وارد کنید"
            v-model="user.username"
          />
        </div>
        <div class="field relative">
          <label for="password">رمز عبور</label>
          <input
            id="password"
            :type="user.isPasswordShown ? 'text' : 'password'"
            placeholder="رمز عبور خود را وارد کنید"
            v-model="user.password"
          />
          <i class="pi pi-eye absolute" @click="toggleShow"></i>
        </div>
        <div class="field">
          <button type="submit" class="submit-btn" :disabled="!isLoginAllowed">
            ورود به چینگال
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import Toast from "primevue/toast";
import { useToast } from "primevue/usetoast";
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
const toast = useToast();
const user = ref({
  username: "",
  password: "",
  isPasswordShown: false,
});
const router = useRouter();
const isLoginAllowed = computed(() => {
  if (user.value.username != "" && user.value.password != "") return true;
  return false;
});
const toggleShow = () => {
  user.value.isPasswordShown = !user.value.isPasswordShown;
};
const loginHandler = () => {
  if (isLoginAllowed) {
    if (user.value.username == "admin" && user.value.password == "123") {
      localStorage.setItem("isAuthenticated", "true");
      toast.add({
        severity: "success",
        summary: "ورود موفق",
        detail: "عملیات ورود با موففیت انچام شد",
        life: 3000,
      });
      setTimeout(() => {
        router.push({
          name: "home",
        });
      }, 3000);
    } else {
      toast.add({
        severity: "error",
        summary: "ورود ناموفق",
        detail: "نام کاربری: admin , رمز عبور: 123",
        life: 3000,
      });
    }
  }
};
</script>

<style scoped lang="scss">
#login {
  background: $mainBg;
  .wrapper {
    box-shadow: 20px 11px 122px -20px #2c2c2c;
    padding: 40px;
    max-width: 540px;
    margin: auto;
    img.logo {
      height: 99.83739471435547px;
      width: 200px;
      margin-top: 40px;
    }
    .header {
      font-size: 24px;
      font-weight: 400;
      line-height: 28px;
      letter-spacing: 0em;
      text-align: right;
      color: $whiteTxt;
      margin-top: 40px;
      padding-bottom: 16px;
      border-bottom: 2px solid #182040;
    }
    .field {
      text-align: right;
      label {
        margin-top: 40px;
        font-style: italic;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #7e848e;
      }
      input {
        width: 100%;
        text-align: right;
        padding: 15px;
        border-radius: 10px;
        background: transparent;
        outline: none;
        border: 1px solid #15213f;
        color: #919191;
        transition: 0.2s all ease;
        &:focus {
          border: 1px solid #d2d2d2;
        }
      }
      i {
        bottom: 15px;
        left: 15px;
        font-size: 20px;
        cursor: pointer;
      }
      .submit-btn {
        width: 100%;
        padding: 15px;
        margin-top: 20px;
        text-align: center;
        background: #0559fd;
        box-shadow: 0px 0px 24px #033699;
        border-radius: 16px;
        font-style: italic;
        font-weight: 400;
        font-size: 15px;
        line-height: 24px;
        border: none;
        cursor: pointer;
        color: #fff;
        &:disabled,
        &[disabled] {
          background-color: #002d86;
          color: #666666;
          box-shadow: none;
        }
      }
    }
  }
}
</style>
<style>
.p-toast .p-toast-message .p-toast-message-content .p-toast-detail,
.p-toast .p-toast-message .p-toast-message-content .p-toast-message-text {
  text-align: right;
  direction: rtl;
}
.p-component {
  font-family: unset !important;
}
</style>