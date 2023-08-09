import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined'
import { Avatar } from '@mui/material'
import React from 'react'
import InputOption from './InputOption'
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined'
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined'

const Post = ({name, description, message, photoUrl}) => {
  return (
    <div className="bg-white rounded-lg p-2">
      <div className="mx-2 my-2 flex">
        <Avatar src={photoUrl}> {name[0]}</Avatar>
        <div className="ml-2">
            <h2 className="font-bold text-[15px]">{name}</h2>
            <p className="text-[12px] text-gray-500">{description}</p>
        </div>
      </div>
       <div className="mx-2 my-3">
        <p className="text-2xl">{message}</p>
       </div>
       <div className="flex justify-evenly my-2">
          <InputOption Icon={ThumbUpAltOutlinedIcon} title="Like"/>
          <InputOption Icon={ChatOutlinedIcon} title="Comment"/>
          <InputOption Icon={ShareOutlinedIcon} title="Share"/>
          <InputOption Icon={SendOutlinedIcon} title="Send"/>
       </div>
    </div>
  )
}

export default Post
