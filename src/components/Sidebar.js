import React from 'react'
import { Avatar } from '@mui/material'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'

const Sidebar = () => {

  const user = useSelector(selectUser);
  
      

    const recentItem = (topic) => (
        <div className="text-[13px] flex ml-2 mx-1 my-1 p-1 text-gray-500  hover:bg-slate-100 hover:font-semibold rounded-lg"> 
            <span>#</span>
            <p>{topic}</p>
        </div>
    )
  return (
    <div className="ml-[10%] mt-2 w-[20%] ">
      <div className="border bg-white rounded-t-lg">
        <img src="../images/pic1.jpg"  alt="" className='rounded-t object-cover h-[60px] w-[100%]' />
        <div className="flex justify-center relative mt-[-20px]">
           <Avatar src={user.photoUrl} className="">
            {user.email[0]}
           </Avatar>
        </div>
        <h1 className="mt-2 font-bold text-[24px] text-center">
          {user.displayName}</h1>
        <h4 className="font-semibold text-[12px] my-1 text-center text-gray-500">
           {user.email}</h4>
      </div>
       <div className="border-b border-r border-l rounded-b-lg bg-white py-2">
          <div className="flex text-sm font-semibold text-gray-500 justify-between mx-3 my-1">
           <p>Who viewed you</p>
           <p className="text-blue-600">150</p>
          </div>
          <div className="flex text-sm font-semibold  text-gray-500 justify-between mx-3 my-1">
           <p>Views on post</p>
           <p className="text-blue-600">53</p>
         </div>
       </div>
       <div className="rounded-lg bg-white mt-1">
            <p className="font-medium pt-1 pl-2">Recent</p>
            {recentItem("react js")}
            {recentItem("tailwind css")}
            {recentItem("front-end")}
            {recentItem("Redux")}
            {recentItem("nextjs")}
        </div>
    </div>
  )
}

export default Sidebar
