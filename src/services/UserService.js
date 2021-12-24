import axios from "axios";
import GeneralService from "./GeneralService";

const UserService = {
  getList: data => {
    const endpoint = "user/usr/getUserList";
    const config = {
      method: "get",
      url: "https://fpos.didieu.xyz/api/" + endpoint,
      headers: GeneralService.getTokenHeader(),
      params: {
        email: data.email ? data.email : "",
        userNameParam: data.username ? data.username : "",
        keyword: data.keyword ? data.keyword : "",
        size: `${data.size}`,
        page: `${data.page - 1 }`,
        sort: data.sortby ? data.sortby.toString() : "username",
        order: data.order ? data.order : "ASC"
      }
    };
    return new Promise((resolve) => {
      axios(config).then(response => {
        const responseData = response.data.result;
        return resolve(responseData);
      });
    });
  }
};

export default UserService;
