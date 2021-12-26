import axios from "axios";
import GeneralService from "./GeneralService";

const usersUrl = "https://fpos.didieu.xyz/api/user/usr";

export const getUserList = async () => {
  return await axios.get(
    `${usersUrl}/getUserList?size=100`,
    {headers: GeneralService.getTokenHeader()
    });
};

export const getUsers = async (id) => {
  id = id || "";
  return await axios.get(
    `${usersUrl}/getUserDetails?userId=${id}`,
    {headers: GeneralService.getTokenHeader()
    });
};

export const addUser = async (user) => {
  return await axios.post(`${usersUrl}/add`, user);
};

export const editUser = async (id, user, roleIds) => {
  const body = {
    email: user.email,
    enterpriseId: user.enterpriseId,
    firstName: user.firstName,
    lastName: user.lastName,
    language: user.language,
    phoneNumber: user.phoneNumber,
    roleId: roleIds
  };

  return await axios.post(
    `${usersUrl}/updateUser?userId=${id}`,
    body, 
    {headers: GeneralService.getTokenHeader()
    });
};