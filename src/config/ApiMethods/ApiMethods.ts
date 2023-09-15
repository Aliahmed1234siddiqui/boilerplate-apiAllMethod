import { Token } from '@mui/icons-material'
import axios from 'axios'
import React from 'react'

const Handling =    axios.create({
    baseURL:"https://jsonplaceholder.typicode.com",
    headers:{
        Authorization:`bearer`
    }
   })

export  const Get= (endpoint:string ,id?:number)=>{ 
return Handling.get(`${endpoint}/${id?id:""}`);
}     
export const Add = (endpoint:string ,model:any)=>{
    return Handling.post(endpoint,model);

}
export const Update = (endpoint:string  ,model:any)=>{
    return Handling.put(`${endpoint}` , model);

}

export const Delete = (endpoint:string )=>{
    return Handling.delete(`${endpoint}`);

}
