import React from 'react'
import { BrowserRouter as Routers , Routes , Route } from 'react-router-dom'
import Comments from '../Pages/Comments'
import AddComments from '../Pages/AddComments'
export default function ARouter() {
  return (
    <div>
      
<Routers>
    <Routes>
<Route path='/' element={<Comments />}></Route>
<Route path='AddComments' element={<AddComments />}></Route>
<Route path='AddComments/:id' element={<AddComments />}></Route>

    </Routes>
</Routers>


    </div>
  )
}
