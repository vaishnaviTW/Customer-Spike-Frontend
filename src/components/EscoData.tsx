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



//simple data example - Check out https://www.material-react-table.com/docs/examples/remote for a more complex example


const EscoData = () => {
const [d,SetD]=useState([]);
const [filter, setFilter] = useState('');
const [name,setName] = useState('');

  const handleChange = (event) => {
    setFilter(event.target.value);
    console.log(filter)
  };


useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await o('http://localhost:5190/odata')
          .get('odata/escos')
          .query({ $filter: `${filter} eq '${name}'` });
        SetD(response);
        console.log(response);
        
      } catch (err) {
        console.log(err);
        (err);
      } 
    };

    fetchData();
  }, [name]);


  return (
    <div>
    <Box sx={{ maxWidth: 500 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Filter</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={filter}
          label="Filter"
          onChange={handleChange}
        >
          <MenuItem value={"Id"}>Id</MenuItem>
          <MenuItem value={"Name"}>Name</MenuItem>
        </Select>
      </FormControl>
      <br /> <br />
    </Box>
    <TextField
        id="outlined-controlled"
        label="Field Value"
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
      />

<TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
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
