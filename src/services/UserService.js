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
  const body = {
    username: user.username,
    firstName: user.firstName,
    lastName: user.lastName,
    password: user.password,
    email: user.email,
    phoneNumber: user.phoneNumber,
    language: user.language,
    enterpriseId: "a06e38ea-d871-4945-8126-44fab717180a",
    roleId: [
      "df462e06-787b-465c-b203-d97fb9579cc9"
    ],
    mailVerification: false
  };

  return await axios.post(`${usersUrl}/createUser`, body, {
    headers:  GeneralService.getTokenHeader()});
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