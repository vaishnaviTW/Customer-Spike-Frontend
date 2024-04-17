import React, { useEffect, useMemo, useState } from "react";
import {
  type MRT_ColumnDef,
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import axios from "axios";

//simple data example - Check out https://www.material-react-table.com/docs/examples/remote for a more complex example

const arr=["Id","Name"];


const Escos = () => {
const [d,SetD]=useState([]);
const [sortBy,setSortBy] = useState(1);

useEffect(()=>{
    axios.get("http://localhost:5190/odata/escos?$orderBy="+arr[Math.abs(sortBy)-1]+(sortBy>0?" asc":" desc"))
      .then(
        res=>SetD(res.data.value)
      )
      .catch(err=>console.log("error while fetching the user data: "+err));
},[])


      type Esco = {
        id: number,
        name: string
      }

      const data: Esco[] = d

  const columns = useMemo<MRT_ColumnDef<Esco>[]>(
    () => [
      {
        accessorKey: 'Id', //simple recommended way to define a column
        header: "ID",
        size: 200
      },
      {
      accessorKey: "Name", //simple recommended way to define a column
      header: "Name",
      size: 200
      }
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data
  });

  return <MaterialReactTable table={table} />;
};

export default Escos;

// import axios from "axios";
// import { useEffect, useState } from "react"

// const arr=["Id","Name"];

// export const Escos=()=>{
//   const [sortBy,setSortBy] = useState(1);
//   const [userData,setUserData]=useState([]);
  
//   useEffect(()=>{
//       axios.get("http://localhost:5043/odata/escos?$orderBy="+arr[Math.abs(sortBy)-1]+(sortBy>0?" asc":" desc"))
//       .then(
//         res=>setUserData(res.data.value)
//       )
//       .catch(err=>console.log("error while fetching the user data: "+err));
//   },[sortBy]);

//   interface ButtonWithIndexProps {
//     columnName: string;
//     index: number;
// }


//   const handleClick=(index:number)=>{
//     setSortBy( Math.abs(sortBy)===index? -sortBy: index);
//   }
//   const ButtonWithIndex=({columnName,index}:ButtonWithIndexProps)=>{
//     return (
//       <button onClick={()=>handleClick(index)}>
//         {columnName} {Math.abs(sortBy)===index? ': '+(sortBy>0?'v':'^'):null}
//       </button>
//     )
//   }

//     return <>
//         <table>
//           <thead>
//             <td><ButtonWithIndex columnName={"User Id"} index={1}/></td>
//             <td><ButtonWithIndex columnName={"First Name"} index={2}/></td>
//           </thead>
//           <tbody>
//           {
//           userData.length > 0 ? (
//             userData.map((row,idx) => (
//               <tr key={idx}>
//                 {/* <td>{row.Id}  </td>
//                 <td>{row.Name}</td> */}
//                 <td>Hi</td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan={2}>Loading data...</td>
//             </tr>
//           )}
//           </tbody>
//         </table>
//     </>
// }