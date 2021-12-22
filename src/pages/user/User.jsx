import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./user.css";

export default function User() {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img src="../Musica.png" alt="" className="userShowImg"/>
            <div className="userShowTopTitle">
              <span className="userShowUsername">Musica Store</span>
              {/* <span className="userShowUserTitle">Owner</span> */}
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Example Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">Ryan Widhistira</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">ryan@gmail.com</span>
            </div>
            <span className="userShowTitle"></span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">+628122548769</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">1990-10-27</span>
            </div>
            {/* <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">Bandung | Indonesia</span>
            </div> */}
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit User</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              {/* <div className="userUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="#"
                  className="userUpdateInput"
                />
              </div> */}
              <div className="userUpdateItem">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder=""
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder=""
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder=""
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Birth Date</label>
                <input
                  type="text"
                  placeholder=""
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateCenter">
              <div className="userUpdateUpload">
                {/* <img
                  className="userUpdateImg"
                  src=""
                  alt="" 
                /> */}
                {/* <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label> */}
                <input type="file" id="file" style={{ display: "none" }}  /> 
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
