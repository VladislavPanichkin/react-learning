import Axios from "axios";

const instance = Axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "5793ba96-dcc4-48f0-9d86-9a2c5e04d32f",
  },
});

export const userApi = {
  
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },

  setUser(userId) {
    console.warn("Obsolete method. Please use profileApi object.")
    return instance.get("profile/" + userId).then((response) => {
      return profileApi.setUser(userId);
    });
  },

  authMe() {
    return instance.get("auth/me").then((response) => {
      return response.data;
    });
  },

  follow(userId) {
      return instance.post('follow/' + userId)
  },

  unfollow(userId) {
    return instance.delete('follow/' + userId)
  }
};

export const profileApi = {
  setUser(userId) {
    return instance.get("profile/" + userId).then((response) => {
      return response.data;
    });
  },

  getStatus(userId) {
    return instance.get("profile/status/" + userId).then((response) => {
      return response.data;
    })
  },

  updateStatus(status) {
    return instance.put("profile/status/", { status });
  }
}