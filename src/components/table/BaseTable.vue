<template>
  <div dir="rtl" class="base-table">
    <DataTable
      :value="list"
      :loading="list?.length == 0"
      stripedRows
      responsiveLayout="scroll"
      @row-click="redirectToSingle"
    >
      <Column headerStyle="text-align:center" field="name">
        <template #header class="flex align-items-center gap-2">
          نام
          <i
            class="pi toggle-sort"
            :class="store.sortType == 0 ? 'pi-angle-down' : 'pi-angle-up'"
            @click="toggleSort"
          ></i>
        </template>
      </Column>
      <Column
        headerStyle="text-align:center"
        field="dateOfBirth"
        header="تاریخ تولد"
      ></Column>
      <Column
        headerStyle="text-align:center"
        field="zipcode"
        header="شماره "
      ></Column>
      <Column
        headerStyle="text-align:center"
        field="createdAt"
        header="تاریخ ساخت"
      ></Column>
      <Column
        headerStyle="text-align:center"
        field="address"
        header="آدرس"
      ></Column>
      <Column
        headerStyle="text-align:center"
        field="country"
        header="کشور"
      ></Column>
    </DataTable>
  </div>
</template>

<script setup>
import { ref, onMounted, defineProps } from "vue";
import { useUserListStore } from "@/stores/userlist.js";
import { useRouter } from "vue-router";
import axios from "axios";
import DataTable from "primevue/datatable";
import Column from "primevue/column";

const router = useRouter();
const store = useUserListStore();
const props = defineProps({
  list: Array,
});
const redirectToSingle = (item) => {
  router.push({
    name: "user",
    params: {
      id: item.data.id,
    },
  });
};
const toggleSort = () => {
  if (store.sortType == 0) {
    store.sortType = 1;
    localStorage.setItem("sortType", 1);
  } else if (store.sortType == 1) {
    store.sortType = 0;
    localStorage.setItem("sortType", 0);
  }
};
</script>
<style lang="scss">
.p-datatable .p-datatable-tbody > tr > td {
  text-align: center;
}

.p-datatable .p-column-header-content {
  justify-content: center;
  align-items: center;
  gap: 10px;
}
.p-datatable .p-datatable-tbody > tr {
  background: $mainBg !important;
  color: $whiteTxt !important;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: center;
}
.p-datatable.p-datatable-striped .p-datatable-tbody > tr:nth-child(even) {
  background: linear-gradient(0deg, #0c132c, #0c132c),
    linear-gradient(0deg, #182040, #182040) !important;
}
.p-datatable .p-datatable-thead > tr > th {
  background: linear-gradient(0deg, #0c132c, #0c132c),
    linear-gradient(0deg, #182040, #182040) !important;
  font-weight: 400;
  font-size: 12px;
  color: #7e848e;
}
.p-datatable .p-datatable-tbody > tr > td {
  padding: calc(1rem + 10px) 1rem;
}
.p-datatable-wrapper {
  border-radius: 15px;
}
.toggle-sort {
  color: $whiteTxt;
}
</style>