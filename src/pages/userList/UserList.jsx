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

  // const handleDelete = (id) => {
  //   setData(data.filter((item) => item.id !== id));
  // };
  const columns = [
    {
      field: "userId",
      headerName: "userId",
      width: 160
    },
    {
      field: "firstName",
      headerName: "Name",
      width: 160
    },
    {
      field: "lastName",
      headerName: "LastName",
      width: 160
    },
    {
      field: "email",
      headerName: "Email",
      width: 160
    },
    {
      field: "phoneNumber",
      headerName: "Phone Number",
      width: 160
    },
    {
      field: "action",
      headerName: "Action",
      width: 160,
      renderCell: (params) => {
        const onClickDelete = async () => {
          return alert(JSON.stringify(params.row, null, 4));
        };
        return (
          <>
            {/* <Link to={"/newUser/" + params.row.id}>
              <button className="userListEdit">Create</button>
            </Link> */}
            <Link to={"/user/" + params.getValue(params.id,"userId")}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={onClickDelete}/>
            {/* onClick={() => handleDelete(params.row.id)}/> */}
            {/* <DeleteOutline
              className="userListDelete"
              // onClick={() => handleDelete(params.row.id)}/>
              onClick={onClickDelete}/> */}

          </>
        );
      }
    }
  ];

  return (
    <div className="userList">
      <Link to="/newUser">   
        <button className="userAddButton">Create</button>
        <button className="userAddButton2"></button>
      </Link>
      <DataGrid
        getRowId = {(r) => r.userId}
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
    // </div>
  );
}
