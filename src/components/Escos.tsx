import React, { useEffect, useMemo, useState } from "react";
import {
  type MRT_ColumnDef,
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import axios from "axios";

//simple data example - Check out https://www.material-react-table.com/docs/examples/remote for a more complex example


const Escos = () => {
const [d,SetD]=useState([]);

useEffect(()=>{
    axios.get("http://localhost:5190/odata/Escos?&$expand=Customers($filter=Id gt 432767)&$orderby=Name desc")
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

