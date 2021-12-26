/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/display-name */
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
// import { userRows, users } from "../../dummyData";
import * as React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./UserList.css";
import { getUserList } from "../../../services/UserService";

export default function UserList () {
  const [data, setData] = useState([]);
  const [pageSize, setPageSize] = React.useState(5);

  useEffect(() => {
    loadUserList();
  }, []);

  const loadUserList = async() => {
    const response = await getUserList();
    setData(response.data.result.content);
  };

  // useEffect(async () => {
  //   await axios.get("https://fpos.didieu.xyz/api/user/usr/getUserList?size=100", {
  //     headers: GeneralService.getTokenHeader()
  //   })
  //     .then(res => {
  //       const users = res.data.result.content;
  //       setData(Object.values(users));
  //       console.log(users);
  //     });
  // }, []);


  const columns = [
    {
      field: "username",
      headerName: "User Name",
      width: 160
    },
    {
      field: "firstName",
      headerName: "First Name",
      width: 160
    },
    {
      field: "lastName",
      headerName: "Last Name",
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
      filterable: false,
      renderCell: (params) => {
        const onClickDelete = async () => {
          return alert(JSON.stringify(params.row, null, 4));
        };
        return (
          <>
            <Link to={"/user/" + params.getValue(params.id,"userId")}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={onClickDelete}/>
          </>
        );
      }
    }
  ];

  return (
    <div style={{ width: "100%" }}>
      <Link to="/newUser">   
        <button className="userAddButton">Create</button>
      </Link>
      <DataGrid
        autoHeight
        getRowId = {(r) => r.userId}
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[5, 10, 20]}
        pagination
        checkboxSelection
      />
    </div>
  );
}
