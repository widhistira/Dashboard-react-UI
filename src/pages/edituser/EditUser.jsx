import "./editUser.css";
import { useState, useEffect } from "react";
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from "@material-ui/core";
import { useHistory, useParams } from "react-router-dom";
import { getUsers, editUser } from "../../services/UserService";


const initialValue = {
  userName: "",
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: ""
};

const useStyles = makeStyles({
  container: {
    width: "50%",
    margin: "5% 0 0 25%",
    "& > *": {
      marginTop: 20
    }
  }
});

const EditUser = () => {
  const [user, setUser] = useState(initialValue);
  const {firstName,lastName, username, email, phoneNumber} = user;
  const {userId} = useParams();
  const classes = useStyles();
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
    history.push("/users");
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

  return (
    <div className="container2">
      <FormGroup className={classes.container}>
        <Typography variant="h4">Edit User</Typography>
        <FormControl>
          <InputLabel htmlFor="my-input">User Name</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name='username' value={username} id="my-input" aria-describedby="my-helper-text" />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">First Name</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name='firstName' value={firstName} id="my-input" aria-describedby="my-helper-text" />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">Last Name</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name='lastName' value={lastName} id="my-input" aria-describedby="my-helper-text" />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">Email</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name='email' value={email} id="my-input" aria-describedby="my-helper-text" />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">Phone Number</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name='phoneNumber' value={phoneNumber} id="my-input" aria-describedby="my-helper-text" />
        </FormControl>
        {/* <FormControl>
          <InputLabel htmlFor="my-input">Role Id</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name='roles' value={roles} id="my-input" aria-describedby="my-helper-text" />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">Enterprise Id</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name='enterpriseId' value={enterpriseId} id="my-input" aria-describedby="my-helper-text" />
        </FormControl> */}
        <FormControl>
          <Button variant="contained" color="primary" onClick={() => editUserDetails()}>Edit User</Button>
        </FormControl>
      </FormGroup>
    </div>
  );
};

export default EditUser;
