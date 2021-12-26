// import "./editUser.css";
import { useState, useEffect } from "react";
import { FormGroup, FormControl, Button, makeStyles, Typography, TextField } from "@material-ui/core";
import { useHistory, useParams } from "react-router-dom";
import { getUsers, editUser } from "../../../services/UserService";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";


const initialValue = {
  userName: "",
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: ""
};

const useStyles = makeStyles({
  container: {
    width: "150%",
    margin: "0% 0 0 10%",
    "& > *": {
      marginTop: 20
    }
  }
});

const UpdateUser = () => {
  const [user, setUser] = useState(initialValue || "");
  const {firstName,lastName, username, email, phoneNumber} = user;
  const {userId} = useParams();
  const classes = useStyles();
  const [state,setState] = useState({open: false});
  let history = useHistory();
  let roleIds = [];

  useEffect(() => {
    loadUserDetails();
  }, []);

  const loadUserDetails = async() => {
    const response = await getUsers(userId);
    setUser(response.data.result);
  };

  const editUserDetails = async() => {
    await mapRoleIds();
    await editUser(userId, user, roleIds);
    await setState({open: true});
  };

  const onValueChange = (e) => {
    console.log(e.target.value);
    setUser({...user, [e.target.name]: e.target.value});
  };
  
  const mapRoleIds = async () => {
    await user.roles.forEach((element) => {
      roleIds.push(element.roleId);
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
    editUserDetails();
    setState({open: true});
  }

  function handleClose() {
    history.push("/users");
  }

  return (
    <div>
      <FormGroup className={classes.container}>
        <Typography variant="h4">Edit User</Typography>
        <TextField
          id="username"
          disabled
          label="User Name"
          name='username'
          value={username}
        />
        <TextField
          id="firstName"
          label="First Name"
          name='firstName'
          value={firstName}
          required
          onChange={(e) => onValueChange(e)}
        />
        <TextField
          id="lastName"
          label="Last Name"
          name='lastName'
          value={lastName}
          required
          onChange={(e) => onValueChange(e)}
        />
        <TextField
          id="email"
          label="Email"
          name='email'
          value={email}
          required
          onChange={(e) => onValueChange(e)}
        />
        <TextField
          id="phoneNumber"
          label="Phone Number"
          name='phoneNumber'
          value={phoneNumber}
          required
          onChange={(e) => onValueChange(e)}
        />
        <FormControl>
          <Button variant="contained" color="primary" onClick={handleSubmit}>Edit User</Button>
          <Dialog open={state.open} onEnter={console.log("Hey.")}>
            <DialogTitle>Hello User</DialogTitle>
            <DialogContent>Edit Data Has Been Succesfull!</DialogContent>
            <DialogActions>
              <Button onClick={handleClose} autoFocus>
            OK!
              </Button>
            </DialogActions>
          </Dialog>
        </FormControl>
      </FormGroup>
    </div>
  );
};

export default UpdateUser;
