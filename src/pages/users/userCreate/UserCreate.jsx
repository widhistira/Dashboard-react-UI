import "./UserCreate.css";
import "@material-ui/icons";
import { useState } from "react";
// import Dialog from "@material-ui/core/Dialog";
// import DialogContent from "@material-ui/core/DialogContent";
// import DialogTitle from "@material-ui/core/DialogTitle";
// import DialogActions from "@material-ui/core/DialogActions";
import { useHistory } from "react-router-dom";
import { addUser } from "../../../services/UserService";
import { Button, TextField, makeStyles, DialogTitle, DialogContent, Dialog, DialogActions} from "@material-ui/core";


const useStyles = makeStyles({
  container: {
    width: "30%",
    margin: "0% 0 0 10%",
    "& > *": {
      marginTop: 20
    }
  }
});

export default function UserCreate() {
  const [state,setState] = useState({open: false});
  let history = useHistory();
  const [user, setUser] = useState("");
  const {firstName,lastName, username, password, email, phoneNumber} = user;
  const classes = useStyles();

  const submitData = async() => {
    await addUser(user);
  };

  const onValueChange = (e) => {
    console.log(e.target.value);
    setUser({...user, [e.target.name]: e.target.value});
  };

  function handleClose() {
    history.push("/users");
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
    submitData();
    setState({open: true});
  }

  return (
    <div className={classes.container}>
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm" onSubmit={handleSubmit}>
        <TextField
          id="username"
          label="User Name"
          name='username'
          value={username}
          onChange={(e) => onValueChange(e)}
        />
        <TextField
          id="password"
          label="Password"
          name='password'
          value={password}
          onChange={(e) => onValueChange(e)}
        />
        <TextField
          id="firstName"
          label="First Name"
          name='firstName'
          value={firstName}
          onChange={(e) => onValueChange(e)}
        />
        <TextField
          id="lastName"
          label="Last Name"
          name='lastName'
          value={lastName}
          onChange={(e) => onValueChange(e)}
        />
        <TextField
          id="email"
          label="Email"
          name='email'
          value={email}
          onChange={(e) => onValueChange(e)}
        />
        <TextField
          id="phoneNumber"
          label="Phone Number"
          name='phoneNumber'
          value={phoneNumber}
          onChange={(e) => onValueChange(e)}
        />
        {/* <div className="newUserItem">
          <label>Language</label>
          <select onChange={(e) => setLanguage(e.target.value)}
            type="language" 
            className="newUserSelect" name="language" id="language">
            <option value="english">English</option>
            <option value="indonesia">Indonesia</option>
          </select>
        </div> */}
        <button type="submit" className="newUserButton" onSubmit={handleSubmit}>Submit</button>
        <Dialog open={state.open} onEnter={console.log("Hey.")}>
          <DialogTitle>Hello User</DialogTitle>
          <DialogContent>youre Data Has Been Succesfull Created!</DialogContent>
          <DialogActions>
            <Button onClick={handleClose} autoFocus>
            OK!
            </Button>
          </DialogActions>
        </Dialog>
      </form>
    </div>
  );
}