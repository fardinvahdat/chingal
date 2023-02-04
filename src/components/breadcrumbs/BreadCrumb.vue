<template>
  <div class="breadcrumbs bread-crumb text-right" dir="rtl">
    <RouterLink
      :to="breadcrumb.link"
      class="breadcrumb"
      v-for="(breadcrumb, index) in list"
      :key="index"
    >
      <span class="ml-3">{{ breadcrumb.label }}</span>
      <i class="pi pi-angle-left ml-2"></i>
    </RouterLink>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  list: Array,
});
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}
.bread-crumb {
  margin: 40px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  justify-content: flex-start;
  .breadcrumb {
    color: $grayLightText;
    display: inline;
    cursor: pointer;
    i {
      font-size: 25px;
      position: relative;
      top: 8px;
    }
    &:last-child {
      color: $whiteTxt;
    }
  }
}
</style>