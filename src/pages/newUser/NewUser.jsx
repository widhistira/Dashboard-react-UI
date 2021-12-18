import "./newUser.css";

export default function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Username</label>
          <input type="text" placeholder="" />
        </div>
        <div className="newUserItem">
          <label>Full Name</label>
          <input type="text" placeholder="" />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="" />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input type="password" placeholder="" />
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input type="text" placeholder="" />
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input type="text" placeholder="" />
        </div>
        <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Female</label>
          </div>
        </div>
        <div className="newUserItem">
          <label>Hobby</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Basket Ball</option>
            <option value="no">Futsal</option>
            <option value="no">Bicycle</option>
            <option value="no">Badminton</option>
          </select>
        </div>
        <button className="newUserButton">Create</button>
      </form>
    </div>
  );
}
