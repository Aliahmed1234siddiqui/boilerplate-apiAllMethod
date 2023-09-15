import React, { useEffect ,useState } from 'react'
import { Delete, Get } from '../ApiMethods/ApiMethods';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import{useNavigate} from 'react-router-dom'


export default function Comments() {
const[list , SetList] = useState<any>([])
 let get = ()=>{
Get("comments").then((res)=>{
  SetList([...res.data]);
}).catch((err)=>{
console.log(err);
})
}
 
useEffect(()=>{
get();
},[])

console.log(list);
let navigate = useNavigate()



  return (
    <div>

      <h1 className='bg-black text-white py-2 text-center'>BOILER PLATE</h1>
      <button onClick={()=>{
navigate('./AddComments')
      }} className='btn btn-danger'>Add Comment</button>
      <div className="row">
{
list.map((x:any , i:any)=>{
return(

  <div className="card bg-black text-white p-3 m-3" key={i}>
    <p>{x.postId}</p>
    <p>{x.name}</p>
    <p>{x.email}</p>
    <p>{x.body}</p>
    <div className="d-flex justify-content-center">
    <IconButton className='text-primary'onClick={()=>{
      navigate(`../Addcomments/${x.id}`)
    }} >
      UPDATE COMMENT  
<EditIcon/>
    </IconButton>
    <IconButton onClick={()=>{
Delete(`comments/${x.id}`).then((res)=>{alert("DELETE SUCCESSFULLY")}).catch((err)=>{console.log(err)})
    }}  className='text-danger'>
DELETE COMMENT <DeleteIcon/>
    </IconButton>
    </div>
  </div>
)
})
}
</div>
    </div>
  )
}
