/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/display-name */
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
// import { userRows, users } from "../../dummyData";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "./userList.css";
import GeneralService from "../../services/GeneralService";

export default function UserList () {
  const [data, setData] = useState([]);
  useEffect(async () => {
    axios.get("https://fpos.didieu.xyz/api/user/usr/getUserList", {
      headers: GeneralService.getTokenHeader()
    })
      .then(res => {
        const users = res.data.result.content;
        setData(Object.values(users));
        console.log(users);
      });
  }, []);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const columns = [
    {
      field: "userId",
      headerName: "userId",
      width: 180
    },
    {
      field: "firstName",
      headerName: "Name",
      width: 200
    },
    {
      field: "email",
      headerName: "Email",
      width: 200
    },
    {
      field: "phoneNumber",
      headerName: "Phone Number",
      width: 180
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            {/* <Link to={"/newUser/" + params.row.id}>
              <button className="userListEdit">Create</button>
            </Link> */}
            <Link to={"/user/" + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}/>
          </>
        );
      }
    }
  ];

  return (
    <div className="user2">
      <div className="userTitleContainer2">
        <Link to="/newUser">
          <button className="userAddButton">Create</button>
        </Link>
        <div className="userList">
          <DataGrid
            getRowId = {(r) => r.userId}
            rows={data}
            disableSelectionOnClick
            columns={columns}
            pageSize={8}
            checkboxSelection
          />
        </div>
      </div>
    </div>
  );
}
