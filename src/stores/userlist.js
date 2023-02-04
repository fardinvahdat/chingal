import { defineStore } from "pinia";

export const useUserListStore = defineStore({
  id: "userlist",
  state: () => ({
    userList: [],
    sortType: localStorage.sortType || 0,
    searchText: localStorage.searchText || "",
  }),
  actions: {
    setUserList(userlist) {
      this.userList = userlist;
    },
  },
  getters: {
    users: (state) => {
      if (state.userList.data) {
        const filteredList = state.userList.data.filter((user) =>
          user.name.includes(state.searchText)
        );
        if (state.sortType == 0) {
          return filteredList.sort((a, b) => {
            const nameA = a.name.toUpperCase(); // ignore upper and lowercase
            const nameB = b.name.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }

            // names must be equal
            return 0;
          });
        } else {
          return filteredList
            .sort((a, b) => {
              const nameA = a.name.toUpperCase(); // ignore upper and lowercase
              const nameB = b.name.toUpperCase(); // ignore upper and lowercase
              if (nameA < nameB) {
                return -1;
              }
              if (nameA > nameB) {
                return 1;
              }

              // names must be equal
              return 0;
            })
            .reverse();
        }
      }
    },
  },
});
