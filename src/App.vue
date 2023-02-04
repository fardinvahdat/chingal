<script setup>
import BaseNavbar from "@/components/navbar/BaseNavbar.vue";
import BaseSidebar from "@/components/sidebar/BaseSidebar.vue";
import { computed } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const isLoginPage = computed(() => {
  if (route.name == "login") return true;
  return false;
});
</script>

<template>
  <main v-if="!isLoginPage">
    <div class="grid flex">
      <div class="col-12 p-0">
        <BaseNavbar />
      </div>
    </div>
  </main>
  <div class="flex">
    <RouterView />
    <BaseSidebar v-if="!isLoginPage" />
  </div>
</template>
<style>
</style>
