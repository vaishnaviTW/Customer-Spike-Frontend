import React, { useEffect, useMemo, useState } from "react";
import {
  type MRT_ColumnDef,
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import axios from "axios";

//simple data example - Check out https://www.material-react-table.com/docs/examples/remote for a more complex example

const Customer = () => {
const [d,SetD]=useState([]);
useEffect(()=>{
    axios.get('http://localhost:5190/api/customers')
   .then(res=>SetD(res.data))
    .catch(err=>{
        console.log(err);
    })
},[])

      type Customer = {
        id: number,
        firstName: string,
        lastName: string,
        escoId: number
      }

      const data: Customer[] = d

  const columns = useMemo<MRT_ColumnDef<Customer>[]>(
    () => [
      {
        accessorKey: 'id', //simple recommended way to define a column
        header: "ID",
        size: 200
      },
      {
      accessorKey: "firstName", //simple recommended way to define a column
      header: "First Name",
      size: 200
      },
      {
        accessorKey: "lastName", //simple recommended way to define a column
        header: "Last Name",
        size: 200
        },
        {
            accessorKey: "escoId", //simple recommended way to define a column
            header: "ESCO Id",
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

export default Customer;

// import { useEffect, useMemo, useState } from 'react';
// import {
//   MaterialReactTable,
//   useMaterialReactTable,
//   type MRT_ColumnDef,
// } from 'material-react-table';
// import axios from 'axios';

// //example data type
// type Customer = {
//             id: number,
//             firstName: string,
//             lastName: string,
//             escoId: number
// }
    

// const [d,SetD]=useState([]);
// useEffect(()=>{
//     axios.get('http://localhost:5190/api/customers')
//    .then(res=>console.log(res.data))
//     .catch(err=>{
//         console.log(err);
//     })
// },[d])

// const Customer = () => {
//   //should be memoized or stable
//   const columns = useMemo<MRT_ColumnDef<Customer>[]>(
//     () => [
//       {
//         accessorKey: 'id', //access nested data with dot notation
//         header: 'ID',
//         size: 150,
//       },
//       {
//         accessorKey: 'firstName',
//         header: 'First Name',
//         size: 150,
//       },
//       {
//         accessorKey: 'lastName', //normal accessorKey
//         header: 'Last Name',
//         size: 200,
//       },
//       {
//         accessorKey: 'escoId',
//         header: 'Esco Id',
//         size: 150,
//       }
//     ],
//     [],
//   );

//   const table = useMaterialReactTable({
//     columns,
//     d //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
//   });

//   return <MaterialReactTable table={table} />;
// };

// export default Customer;
