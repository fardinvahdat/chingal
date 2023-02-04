<template>
  <div class="register-chart">
    <h4>{{ chart.title }}</h4>
    <h6>{{ chart.description }}</h6>
    <Knob v-model="chart.value" disabled valueColor="#0559FD" rangeColor="#182040"/>
    <p class="caption">{{ chart.caption }}</p>
  </div>
</template>

<script setup>
import Knob from "primevue/knob";
import { ref } from "vue";
const chart = ref({
  title: "آمار ثبت‌نام",
  description: "درصد کاربرانی که در پنل ثبت‌نام کرده‌اند",
  value: 75,
  caption: "کاربران",
});
</script>

<style lang="scss" scoped>
.register-chart {
  margin-top: 2rem;
  border-radius: 24px;
  padding: 40px 40px 16px 40px;
  background: $mainBg;
  box-shadow: 24px 24px 96px #0c132c;
  backdrop-filter: blur(12px);
  text-align: center;
  h4 {
    font-size: 24px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0em;
    color: $whiteTxt;
    margin-bottom: 2rem;
    margin-top: 2rem;
  }
  h6 {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: center;
    color: $grayLightText;
    margin-bottom: 3rem;
  }
  p.caption {
    color: $grayLightText;
    font-size: 24px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0em;
  }
}
</style>