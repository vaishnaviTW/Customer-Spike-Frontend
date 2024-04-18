import  { useEffect, useState } from "react";
import {o} from "odata";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { listEscos, searchByField, sort } from "../services/EscoServies";



//simple data example - Check out https://www.material-react-table.com/docs/examples/remote for a more complex example


const EscoData = () => {
const [d,SetD]=useState([]);
const [filter, setFilter] = useState('');
const [name,setName] = useState('');
const [orderBy, setOrderBy] = useState("asc");

  const handleChange = (event) => {
    setFilter(event.target.value);

    searchByField(field,f).then((res)=>{
      SetD(res.data.value);
    }).catch((err)=>{
      console.log(err);     
    })
    console.log(filter);
  };

const handleClick = (value)=>{
    if(orderBy === "asc"){
        setOrderBy("desc");
    }else{
        setOrderBy("asc");
    }
    sort(value,orderBy).then((res)=>{
            SetD(res.data.value);
    })
}

useEffect(() => {
    const fetchData = async () => {
        listEscos().then((response) => {
            SetD(response.data.value);            
        }).catch((error) => {
            console.log(error);
        })
      } 
      fetchData();
    }
  , [name]);


  return (
    <div>


<TableContainer component={Paper}>
      <Table sx={{ minWidth: 800 }} aria-label="simple table">
        <TableHead>
            <TableRow>
                <TableCell><TextField
                id="outlined-controlled"
                label="Filter by Id"
                value={name}
                onChange={(event) => {
                setName(event.target.value);
                }}/>
                </TableCell>
                <TableCell>
                <TextField
                        id="outlined-controlled"
                        label="Filter by Name"
                        value={name}
                        onChange={(event) => {
                        setName(event.target.value);
                        }}
                    />
                </TableCell>
            </TableRow>
          <TableRow>
            <TableCell style={{cursor: "pointer"}} onClick={()=>handleClick("Id")}>Id</TableCell>
            <TableCell style={{cursor: "pointer"}} onClick={()=>handleClick("Name")}>Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {d.map((row) => (
            <TableRow
              key={row.Id}
            >
              <TableCell>{row.Id}</TableCell>
              <TableCell>{row.Name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </div>
      )
    }

export default EscoData;
