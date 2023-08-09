import React, { useEffect } from 'react';
import './index.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Widgets from './components/Widgets';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from "./features/userSlice"
import Login from './components/Login';
import { auth } from "./firebase"


function App() { 
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  
  useEffect(() => {
   auth.onAuthStateChanged(userAuth => {
    if(userAuth) {
      // user is logged in
       dispatch(login({
        email: userAuth.email,
        uid: userAuth.uid,
        displayName: userAuth.displayName,
        photoUrl:userAuth.photoURL,
       }))
    } else {
      // user is logged out
      dispatch(logout())
    }
   })
  },[])

  return (
    <>
    <body className="bg-slate-100">
     <div>
      <Header />
       {!user ? ( <Login /> 
         ) : (
          <div className="flex pt-20">
           <Sidebar/>
           <Feed/>
           <Widgets/> 
        </div>
       )}
    </div>
   </body>
  </>
 )
}

export default App;
