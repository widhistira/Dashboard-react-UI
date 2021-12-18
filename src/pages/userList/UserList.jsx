import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows, users } from "../../dummyData";
import { Link } from "react-router-dom";
// import { useState } from "react";
import axios from "axios";
import { useEffect,useState } from "react";
import "./userList.css";
// import { DataGrid } from '@mui/x-data-grid';

// const UserList = () => {
//   const [product,setProduct] = useState()
//   const [search,setSearch] = useState("")
//

//  componentDidMount
//     useEffect(() => {
//      console.log('A');
//       getProductData();
//     }, [];
//     return (
//       <div className="UserList">
//       <h1>User List</h1>
//       <input type="text"
//       placeholder="search here"
//       onChange={(e) =>{
//         setSearch(e.target.value);
//       }}
//       />
//
//       {product.filter((item) => {
//         if (search=="") {
//           return item
//         }
//         else if (item.name.toLowerCase().includes(search.toLowerCase())){
//           return item
//         }
//       }).
//       map((item) => {
//         return (
//           <p>
//             {item.name} - {item.price}
//           </p>
//         );
//       })}
//       </div>
//   );
// };
//
//
export default function UserList() {


  const [data, setData] = useState(users);
  // TODO : Use below line and remove above line
  // const [data, setData] = useState([]);

  // TODO : validate getProductData and useEffect method to reflect current UI if it's displaye the correct data
  const getProductData = async () => {
    try{
      const data = await axios.get("http://localhost:8080/user/list");
      console.log(data);
      setData(data);
    } catch(e){
      console.log(e)
    }
  };

  useEffect(() => {
    getProductData();
  }, []);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    // TODO : Tell the lead to fix the ID naming format
    { field: "id", headerName: "ID", width: 90 },
    // TODO : fix the "field" values
    {
      field: "Name",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (

          <div className="userListUser">
            <img className="#" src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "action",
      headerName: "Action",
      width: 120,
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
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
    <div className="user">
    <div className="userTitleContainer">
    <h1 className="userTitle">Create</h1>
    <Link to="/newUser">
      <button className="userAddButton">Create</button>
    </Link>
  </div>
  </div>
    // {
    //   field: "Create",
    //   headerName: "Create",
    //   width: 200 ,
    //   renderCell: (params) => {
    //     return (

    //       <Link to={"/newUser/" + params.row.id}>
    //       <button className="userListEdit">Create</button>
    //     </Link>
    //     );
    //   },
    // },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}

