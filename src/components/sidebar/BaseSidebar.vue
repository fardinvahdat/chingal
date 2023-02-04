<template>
  <aside class="sidebar">
    <div class="menu">
      <router-link to="/" class="button">
        <HomeIcon />
        <span class="text">خانه</span>
      </router-link>
      <router-link to="/userlist" class="button">
        <StatisticsIcon />
        <span class="text">لیست کاربران</span>
      </router-link>
      <div class="seperator"></div>
      <router-link to="/1" class="button">
        <BranchIcon />
        <span class="text">لورم ایپسوم</span>
      </router-link>
      <router-link to="/1" class="button">
        <CarIcon />
        <span class="text">لورم ایپسوم</span>
      </router-link>
      <router-link to="/1" class="button">
        <HeadsetIcon />
        <span class="text">لورم ایپسوم</span>
      </router-link>
      <router-link to="/1" class="button">
        <ResetIcon />
        <span class="text">لورم ایپسوم</span>
      </router-link>
      <router-link to="/1" class="button">
        <RobotIcon />
        <span class="text">لورم ایپسوم</span>
      </router-link>
      <div class="seperator"></div>
      <router-link @click="logoutHandler" to="/login" class="button exit">
        <ExitIcon />
        <span class="text">خروج</span>
      </router-link>
    </div>

    <div class="flex"></div>
  </aside>
</template>

<script setup>
import HomeIcon from "@/assets/svg/Home.vue";
import BranchIcon from "@/assets/svg/Branch.vue";
import CarIcon from "@/assets/svg/Car.vue";
import HeadsetIcon from "@/assets/svg/Headset.vue";
import ResetIcon from "@/assets/svg/Reset.vue";
import RobotIcon from "@/assets/svg/Robot.vue";
import StatisticsIcon from "@/assets/svg/Statistics.vue";
import ExitIcon from "@/assets/svg/Exit.vue";
const logoutHandler = () => {
  localStorage.removeItem("isAuthenticated");
};
</script>

<style lang="scss" scoped>
aside {
  min-width: 350px;
  border-left: 2px solid #182040;
  display: flex;
  flex-direction: column;

  background-image: $mainBg;
  color: #f1f5f9;

  width: calc(2rem + 32px);
  overflow: hidden;
  min-height: 100vh;
  padding: 1rem;

  transition: 0.2s ease-in-out;
  .button .text,
  svg {
    transition: opacity 0.3s ease-in-out;
  }

  .menu {
    margin: 0 -1rem;

    .button {
      display: flex;
      align-items: center;
      text-decoration: none;
      justify-content: end;
      flex-direction: row-reverse;
      gap: 5px;
      margin-bottom: 1rem;

      transition: 0.2s ease-in-out;
      padding: 20px 16px;
      border-radius: 20px;

      svg {
        height: 21.47653579711914px;
        width: 21.5px;
        fill: $grayLightText;
        transition: 0.3s all ease;
      }
      .text {
        color: #f1f5f9;
        transition: 0.2s ease-in-out;
      }
      border: 1px solid transparent;

      &:hover {
        background: linear-gradient(
            201.1deg,
            rgb(0 12 40) 0%,
            rgb(24 32 64) 86.08%
          ),
          linear-gradient(206.57deg, #182040 0%, rgb(24 32 64) 83.33%);
        border: 1px solid transparent;

        svg {
          fill: $primaryColor;
          path {
            fill: $primaryColor;
          }
        }
        .text {
          color: $primaryColor;
        }
      }
    }
    &.router-link-exact-active {
      .text {
        color: $primaryColor;
      }
      svg {
        fill: $primaryColor;
        path {
          fill: $primaryColor;
        }
      }
    }
    .router-link-exact-active {
      background: linear-gradient(
          201.1deg,
          rgb(0 12 40) 0%,
          rgb(24 32 64) 86.08%
        ),
        linear-gradient(206.57deg, #182040 0%, rgb(24 32 64) 83.33%);
      border: 1px solid transparent;
      .text {
        color: $primaryColor;
      }
      svg {
        fill: $primaryColor;
      }
    }
    .exit {
      .text {
        color: #ff3231;
      }
      &:hover {
        .text {
          color: #ff3231;
        }
      }
    }
  }

  &.sidebar {
    width: 400px;
    padding: 48px;
    .menu-toggle-wrap {
      top: -3rem;
    }
    .seperator {
      height: 2px;
      width: 100%;
      border-radius: 2px;
      background: rgba(24, 32, 64, 1);
    }
  }
}
</style>