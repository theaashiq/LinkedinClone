import React from 'react'
import "../index.css"
import SearchIcon from '@mui/icons-material/Search';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import HeaderOptions from './HeaderOptions';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import WorkIcon from '@mui/icons-material/Work';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { useDispatch } from 'react-redux';
import { logout } from '../features/userSlice';
import { auth } from '../firebase';

const Header = () => {
  
  const dispatch = useDispatch();
  
  const logoutOfApp = () => {
     dispatch(logout())
     auth.signOut()
  }

  return (
    <section className="fixed flex w-[100%] z-[2] bg-white justify-evenly drop-shadow-md">
    <div className="flex">
      <div className="my-4">
        <LinkedInIcon fontSize='large' className="text-blue-500"/>
      </div>
      <div className="flex w-[400px]">
        <div className="flex border mx-1 my-4 w-[350px] bg-gray-200 rounded-full">
         <span className="my-1 ml-1"><SearchIcon /></span> 
           <div>
            <input type="text" placeholder='Search...' className="p-1 w-[250px] bg-gray-200 outline-none" />
           </div>
         </div>
       </div>
      </div>    
        <div className="flex px-0">
          <HeaderOptions Icon={HomeIcon} title="Home"/>
          <HeaderOptions Icon={SupervisorAccountIcon} title="My Network"/>
          <HeaderOptions Icon={WorkIcon} title="Jobs"/>
          <HeaderOptions Icon={ForumIcon} title="Messaging"/> 
          <HeaderOptions Icon={NotificationsActiveIcon} title="Notifications" />
          <HeaderOptions 
             avatar={true}
             title="Me" 
             onClick={logoutOfApp}/>
        </div>   
     </section>
  )
}

export default Header
