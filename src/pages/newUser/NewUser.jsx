import "./newUser.css";
import "@material-ui/icons";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
// import { Link } from "react-router-dom";


export default function NewUser() {
  const [email,setEmail] = useState("");
  const [name,setName] = useState("");
  const [phoneNumber,setPhoneNumber] = useState("");
  const [birthDate,setBirthDate] = useState("");
  const [data, setData] = useState([]);
  const getProductData = async () => {


    try{
      const xxx = await axios.post("http://localhost:8080/user/add", {
        Name: name,
        Email: email,
        PhoneNumber: phoneNumber,
        BirthDate: birthDate,
      });
      console.log(xxx);
      setData(data.data);
    } catch(e){
      console.log(e);
    }
  };
  function handleSubmit(e) {
    e.preventDefault();
    getProductData();
  }
  useEffect(() => {
    getProductData();
  }, []);

  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm" onSubmit={handleSubmit}>
        {/* <div className="newUserItem">
          <label>Username</label>
          <input type="text" placeholder="" />
        </div> */}
        <div className="newUserItem">
          <label>Full Name</label>
          <input 
            onChange={(e) => setName(e.target.value)}
            type="text" 
            placeholder="" />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input onChange={(e) => setEmail(e.target.value)} 
            type="email" 
            placeholder="" />
        </div>
        <div className="newUserItem">
          <label>Phone Number</label>
          <input 
            onChange={(e) => setPhoneNumber(e.target.value)}
            type="text" 
            placeholder="" />
        </div>
        <div className="newUserItem">
          <label>Birth Date</label>
          <input 
            onChange={(e) => setBirthDate(e.target.value)}
            type="text" 
            placeholder="" />
        </div>
        {/* <div className="newUserItem">
          <label>Hobby</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Basket Ball</option>
            <option value="no">Futsal</option>
            <option value="no">Bicycle</option>
            <option value="no">Badminton</option>
          </select>
        </div> */}
        <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label htmlFor="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label htmlFor="female">Female</label>
          </div>
        </div>
        <button type="submit" className="newUserButton">Submit</button>
      </form>
    </div>
  );
}
