import React from 'react'
import Avatar from '@mui/material/Avatar'
import "../index.css"
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'

const HeaderOptions = ({avatar, Icon, title, onClick}) => {
  const user = useSelector(selectUser)
  return (
    <div onClick={onClick} className="mx-3 my-2 text-center text-gray-600 cursor-pointer hover:text-black">
      {Icon && <Icon  fontSize="medium" className=""/>}
      {avatar && <Avatar className="">{user?.email[0]} </Avatar>
      }
      <h3 className="text-xs">{title}</h3>
    </div>
  )
}

export default HeaderOptions
