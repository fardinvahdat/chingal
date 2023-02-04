<template>
  <div class="widget-wrapper text-right">
    <h3 class="header">
      اعلان‌ها
      <NotificationIcon />
    </h3>
    <div class="list">
      <ul>
        <li v-for="(listItem, index) in list" :key="index">
          <p :class="{ active: listItem.isActive }">{{ listItem.label }}</p>
          <h6 :class="{ active: listItem.isActive }">
            {{ listItem.description }}
          </h6>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import NotificationIcon from "@/assets/svg/Notification.vue";
import { ref } from "vue";
const list = ref([
  {
    isActive: true,
    label: "امروز",
    description: "امکان اضافه کردن کاربران اضافه میشود.",
  },
  {
    isActive: false,
    label: "دیروز",
    description: "امکان نمایش لیست کاربران اضافه شد.",
  },
  {
    isActive: false,
    label: "10 روز قبل",
    description:
      "طرح پنل کاربران با تمام جزییات مورد نیاز و با تایید سرپرست به پایان رسید.",
  },
  {
    isActive: false,
    label: "11 روز قبل",
    description: "امکان اضافه کردن کاربران اضافه میشود.",
  },
]);
</script>

<style scoped lang="scss">
.widget-wrapper {
  border-radius: 24px;
  padding: 40px 40px 16px 40px;
  background: $mainBg;
  box-shadow: 24px 24px 96px #0c132c;
  backdrop-filter: blur(12px);
  h3 {
    line-height: 50px;
    font-size: 24px;
    color: $whiteTxt;
    display: flex;
    align-items: center;
    gap: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #182040;
    justify-content: flex-end;
    svg {
      fill: $grayLightText;
    }
  }
  .list {
    max-height: 300px;
    ul {
      list-style: none;
      max-height: 300px;
      overflow-y: scroll;
      margin-top: 2rem;
      li {
        padding: 0 15px;
        margin-top: 20px;
        p {
          color: $grayLightText;
          font-size: 14px;
          font-weight: 400;
          line-height: 22px;
          letter-spacing: 0em;
          text-align: right;
          position: relative;
          padding-right: 15px;
          padding-bottom: 5px;
        }
        p.active::before {
          content: "";
          position: absolute;
          right: 0;
          width: 5px;
          height: 5px;
          background: #ff3231;
          border-radius: 50%;
          top: 10px;
        }
        h6 {
          color: $grayLightText;
          font-size: 16px;
          font-weight: 400;
          line-height: 24px;
          letter-spacing: 0em;
          text-align: right;
          direction: rtl;
          padding-right: 15px;
          padding-bottom: 5px;
        }
      }
    }
  }
  .list ul::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #f5f5f5;
  }
  .list ul::-webkit-scrollbar {
    width: 12px;
    background-color: #f5f5f5;
  }
  .list ul::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #555;
  }
}
.active {
  color: $whiteTxt !important;
}
</style>