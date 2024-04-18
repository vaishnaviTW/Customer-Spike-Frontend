import axios from "axios";

const url = "http://localhost:5190/odata/escos";

export const listEscos =  () =>  axios.get(url);
                        
export const sort = (field, orderBy) => axios.get(url+`?$orderby=${field} ${orderBy}`);

export const searchByField = (field,value) => axios.get(url+`?$filter=${field} eq ${value}`)                      