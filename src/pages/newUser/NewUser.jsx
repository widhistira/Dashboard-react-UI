import "./newUser.css";
import "@material-ui/icons";
import { useState } from "react";
import axios from "axios";
import GeneralService from "../../services/GeneralService";
import AlertDialogSlide from "./UserDialog";
import { Link } from "react-router-dom";



export default function NewUser() {
  const [email,setEmail] = useState("");
  const [userName,setUserName] = useState("");
  const [password,setPassword] = useState("");
  const [firstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState("");
  const [phoneNumber,setPhoneNumber] = useState("");
  const [language,setLanguage] = useState("");

  const getProductData = async () => {
    try{
      const data = await axios.post("https://fpos.didieu.xyz/api/user/usr/createUser", {
        username: userName,
        firstName: firstName,
        lastName: lastName,
        password: password,
        email: email,
        phoneNumber: phoneNumber,
        language: language,
        enterpriseId: "a06e38ea-d871-4945-8126-44fab717180a",
        roleId: [
          "df462e06-787b-465c-b203-d97fb9579cc9"
        ],
        mailVerification: false
      },{
        headers:  GeneralService.getTokenHeader()});
      console.log(data);
    } catch(e){
      console.log(e);
    }
  };
  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
    getProductData();
    AlertDialogSlide; 
  }


  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm" onSubmit={handleSubmit}>
        <div className="newUserItem">
          <label>User Name</label>
          <input 
            onChange={(e) => setUserName(e.target.value)}
            type="text" 
            placeholder="" />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input onChange={(e) => setPassword(e.target.value)} 
            type="password" 
            placeholder="" />
        </div>
        <div className="newUserItem">
          <label>First Name</label>
          <input 
            onChange={(e) => setFirstName(e.target.value)}
            type="firstName" 
            placeholder="" />
        </div>
        <div className="newUserItem">
          <label>Last Name</label>
          <input 
            onChange={(e) => setLastName(e.target.value)}
            type="lastName" 
            placeholder="" />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input 
            onChange={(e) => setEmail(e.target.value)}
            type="email" 
            placeholder="" />
        </div>
        <div className="newUserItem">
          <label>Language</label>
          <select onChange={(e) => setLanguage(e.target.value)}
            type="language" 
            className="newUserSelect" name="language" id="language">
            <option value="english">English</option>
            <option value="indonesia">Indonesia</option>
          </select>
        </div>
        <div className="newUserItem">
          <label>Phone Number</label>
          <input 
            onChange={(e) => setPhoneNumber(e.target.value)}
            type="phoneNumber" 
            placeholder="" />
        </div>
        <Link to="/UserList">
          <button type="submit" className="newUserButton" onSubmit={handleSubmit}>Submit</button>
        </Link>
      </form>
    </div>
    
  );
}