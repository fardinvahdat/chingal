<script setup>
import BaseNavbar from "@/components/navbar/BaseNavbar.vue";
import BaseSidebar from "@/components/sidebar/BaseSidebar.vue";
import RegisterChart from "@/components/side-widget/RegisterChart.vue";
import VerticalMenu from "@/components/side-widget/VerticalMenu.vue";
import RobotIcon from "@/assets/svg/Robot.vue";
import HeadsetIcon from "@/assets/svg/Headset.vue";
import StatisticsIcon from "@/assets/svg/Statistics.vue";
import BranchIcon from "@/assets/svg/Branch.vue";
import ResetIcon from "@/assets/svg/Reset.vue";
import CarIcon from "@/assets/svg/Car.vue";
import { ref } from "vue";
const shortcutList = ref([
  {
    icon: RobotIcon,
    title: "لورم ایپسوم",
    description: "توضیح مختصر در مورد لورم ایپسوم قرار گیرد",
    link: "/",
  },
  {
    icon: HeadsetIcon,
    title: "لورم ایپسوم",
    description: "توضیح مختصر در مورد لورم ایپسوم قرار گیرد",
    link: "/",
  },
  {
    icon: StatisticsIcon,
    title: "لیست کاربران",
    description: "توضیح مختصر در مورد لورم ایپسوم قرار گیرد",
    link: "/userlist",
  },
  {
    icon: BranchIcon,
    title: "لورم ایپسوم",
    description: "توضیح مختصر در مورد لورم ایپسوم قرار گیرد",
    link: "/",
  },
  {
    icon: ResetIcon,
    title: "لورم ایپسوم",
    description: "توضیح مختصر در مورد لورم ایپسوم قرار گیرد",
    link: "/",
  },
  {
    icon: CarIcon,
    title: "لورم ایپسوم",
    description: "توضیح مختصر در مورد لورم ایپسوم قرار گیرد",
    link: "/",
  },
]);
</script>

<template>
  <main class="dashboard flex">
    <div class="col-4 side-widgets">
      <VerticalMenu />
      <RegisterChart />
    </div>
    <div class="col-8 wrapper" dir="rtl">
      <div class="w-full col-12 flex">
        <div class="flex banner">
          <img
            src="@/assets/images/Face.png"
            class="logo"
            height="176"
            width="176"
            alt=""
          />
          <div class="flex align-items-center gap-5 content">
            <h1 class="text-right">چینگال چیست؟</h1>
            <p>
              چینگال سامانه‌ایست که برای شما آماده شده است تا با پیاده‌سازی آن
              هم تمرینی کرده باشید و هم اینکه نتیجه‌ی پیاده‌سازی شما مورد بررسی
              تیم کلاینت قرار گیرد.
            </p>
          </div>
        </div>
      </div>
      <div class="shortcut-widgets flex flex-wrap w-full">
        <RouterLink
          v-for="(shortcut, index) in shortcutList"
          :key="index"
          class="shortcut-widget col-4"
          :to="shortcut.link"
        >
          <div class="content">
            <div class="icon">
              <component
                :class="'icon-' + (index + 1)"
                v-bind:is="shortcut.icon"
              ></component>
            </div>
            <div class="title">
              <h4>
                {{ shortcut.title }}
              </h4>
            </div>
            <div class="description">
              <p>
                {{ shortcut.description }}
              </p>
            </div>
          </div>
        </RouterLink>
      </div>
    </div>
  </main>
</template>
<style lang="scss" scoped>
a {
  text-decoration: none;
}
.dashboard {
  background: $mainBg;
  padding: 48px;
  .shortcut-widget {
    .content {
      display: flex;
      cursor: pointer;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      background: linear-gradient(
          45.37deg,
          rgb(15, 23, 53) -0.06%,
          #090f2b 100.06%
        ),
        linear-gradient(225.27deg, rgb(12, 19, 44) -0.06%, rgb(24, 32, 64) 50%);
      border-radius: 24px;
      box-shadow: 16px 16px 96px 0px rgba(2, 11, 31, 0.25);
      border: 1px solid;

      border-image-source: linear-gradient(
        45.37deg,
        rgba(12, 19, 44, 0) -0.06%,
        #2f3756 100.06%
      );
      padding: 48px 24px 24px 24px;

      .title h4 {
        color: $whiteTxt;
        font-size: 24px;
        font-weight: 400;
        line-height: 28px;
        letter-spacing: 0em;
      }
      .description p {
        color: $grayLightText;
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        letter-spacing: 0em;
        text-align: center;
        margin-top: 15px;
      }
      .icon {
        svg {
          height: 57px;
          width: 66px;

          &.icon-1 {
            fill: rgba(138, 145, 14, 1);
          }
          &.icon-2 {
            fill: #058f9a;
          }
          &.icon-3 {
            fill: #8d2129;
          }
          &.icon-4 {
            fill: #8d5a14;
          }
          &.icon-5 {
            fill: #18903a;
          }
          &.icon-6 {
            fill: #8d5a14;
          }
        }
      }
    }
  }
  .banner {
    border-radius: 24px;
    background: rgb(3, 0, 52);
    background: linear-gradient(
      90deg,
      rgb(12, 19, 48) 30%,
      rgba(0, 73, 209, 0.57) 50%,
      rgb(12, 19, 48) 70%
    );
    padding: 40px 15px;

    .content {
      h1 {
        font-size: 28px;
        font-weight: 400;
        line-height: 33px;
        letter-spacing: 0em;
        color: $whiteTxt;
      }
      p {
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        letter-spacing: 0em;
        color: $whiteTxt;
      }
    }
  }
}
</style>