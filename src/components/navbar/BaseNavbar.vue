<template>
  <header class="grid flex justify-content-center align-items-center header">
    <div class="col-11 flex justify-content-between flex-row-reverse">
      <div class="logo">
        <img src="@/assets/svg/logo.svg" alt="" />
      </div>
      <div class="align-content-center flex left-side gap-5">
        <div class="switch-theme">
          <input type="checkbox" id="darkmode-toggle" />
          <label for="darkmode-toggle">
            <SunIcon class="sun svg" />
            <MoonIcon class="moon svg" />
          </label>
        </div>
        <div
          class="search flex align-items-center"
          v-if="route.name == 'userlist'"
        >
          <input
            type="text"
            class="w-full search-box"
            placeholder="جستجو ...."
            v-model="store.searchText"
            @input="storeSearchText"
          />
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import SunIcon from "@/assets/svg/Sun.vue";
import MoonIcon from "@/assets/svg/Moon.vue";
import { useUserListStore } from "@/stores/userlist.js";
import { ref } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const store = useUserListStore();
const storeSearchText = (e) => {
  localStorage.setItem("searchText", e.target.value);
};
</script>

<style lang="scss" scoped>
header.header {
  padding: 24px 48px;
  background: $mainBg;
  border-bottom: 2px solid #182040;
  label {
    height: 56px;
    position: relative;
    display: block;
    border-radius: 10px;
    box-shadow: inset 0px 5px 15px rgb(0 0 0),
      inset 0px -5px 17px rgb(255 255 255 / 65%);
    cursor: pointer;
    background: linear-gradient(204.51deg, #020b1f 0%, #0c132c 84.34%),
      linear-gradient(206.57deg, #182040 0%, rgb(24 32 64) 83.33%);
    padding: 6px;
    width: 104px;
    &:after {
      content: "";
      width: 40px;
      height: 40px;
      position: absolute;
      top: 8px;
      left: 10px;
      background: $primaryColor;
      border-radius: 10px;
      box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
    }
    &:active:after {
      width: 60px;
    }
  }
  input {
    width: 0;
    height: 0;
    visibility: hidden;

    &:checked + label {
      background: #242424;
    }
    &:checked + label:after {
      left: 100px;
      transform: translateX(-100%);
      background: linear-gradient(180deg, #777, #3a3a3a);
    }
  }
  label,
  label:after {
    transition: 0.3s;
  }
  input:checked + label + .background {
    background: #242424;
  }

  label .svg {
    z-index: 100;
  }
  label .svg.sun {
    position: relative;
    top: 10px;
    left: 13px;
    fill: #fff;
    transition: 0.3s;
  }
  label .svg.moon {
    right: 13px;
    fill: #7e7e7e;
    transition: 0.3s;
    position: absolute;
    top: 17px;
  }
  input:checked + label .svg.sun {
    fill: #7e7e7e;
  }
  input:checked + label .svg.moon {
    fill: #fff;
  }
}
.search {
  .search-box {
    padding: 16px;
    gap: 8px;
    width: 512px;
    height: 56px;
    background: linear-gradient(200.68deg, #020b1f 0%, #0c132c 82.07%);
    border-radius: 20px;
    outline: none;
    color: $whiteTxt;
    visibility: initial;
    border: 1px solid;
    border-image-source: linear-gradient(
      206.57deg,
      #182040 0%,
      rgba(24, 32, 64, 0) 83.33%
    );
    text-align: right;
    direction: rtl;
  }
}
</style>