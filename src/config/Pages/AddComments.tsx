import { Button } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams ,useNavigate } from 'react-router-dom';
import'../../App.css'
import { Add, Get, Update } from '../ApiMethods/ApiMethods';
export default function AddComments() {
  let params = useParams();
let [model , SetModel] = useState<any>({});

let submit =()=>{
  Add(`comments`,model).then((res)=>{
    console.log(res.data);
    alert("COMMENT ADD SUCESSFULLY")
  }).catch((err)=>{
console.log(err);
  })
  
}

let get = ()=>{
  Get(`comments/${params.id}`).then((res)=>{SetModel(res.data)}).catch((err)=>{console.log(err)})
  }
useEffect(()=>{
  get()
},[])

let update=()=>{

  Update(`comments/${params.id}`, model).then((res)=>{
alert("update successfuly");
  }).catch((err)=>{
console.log(err);
  })
}

  return (
    <>
    <div className="main m-auto bg-secondary  color-light text-center p-5">
    <h1 className='text-white text-center py-3'>ADD POST</h1>
    <input type="number" value={model.postId}  onChange={(e)=>{SetModel({...model ,postId:e.target.value})}}  className='p-3 m-3' placeholder='POST ID' /> <br />
    <input type="text" value={model.name} onChange={(e)=>{SetModel({...model ,name:e.target.value})}} className='p-3 m-3'  placeholder='NAME' /><br />
    <input type="email"value={model.email} onChange={(e)=>{SetModel({...model ,email:e.target.value})}} className='p-3 m-3' placeholder='EMAIL' /><br />
    <input type="text"value={model.body} onChange={(e)=>{SetModel({...model ,body:e.target.value})}} className='p-3 m-3' placeholder='BODY' /><br />
{params.id ? <button onClick={update} className='btn btn-danger'>UPDATE</button> : <button onClick={submit} className='btn btn-danger'>SUBMIT</button>  }
    


    </div>
    
    
    </>
  )
}
