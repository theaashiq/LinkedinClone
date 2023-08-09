//import { userSlice } from '../features/userSlice'
import React, {useState} from 'react'
import { auth } from "../firebase"
import { useDispatch } from 'react-redux'
import { login } from "../features/userSlice"

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setpassword] = useState("")
    const [name, setName] = useState("")
    const [profilePic, setProfilePic] = useState("")
    
    const dispatch = useDispatch(); 
    
    const loginToApp =(e) => {
        e.preventDefault();

       auth.signInWithEmailAndPassword(email, password)
         .then(userAuth =>{
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                profileUrl:userAuth.user.photoURL,
            }))
         }).catch(error => alert(error)) 
    }

   const register = () => {
     if(!name) {
        return alert('Please fill the name block')
      }
   auth.createUserWithEmailAndPassword(email, password)
   .then((userAuth) => {
      userAuth.user.updateProfile({
        displayName: name,
        photoURL: profilePic,
      })
     .then(() => (
         dispatch(
           login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: name,
            photoUrl: profilePic,
         }))
      ))
   }).catch((error) => alert(error))
   }

   
   

  return (
    <div className="w-screen h-screen flex justify-center items-center">
        <div className='w-96 h-96'>
           <div className='flex justify-center'>
            <img 
              className='h-[70px]'
              src="./images/LinkedIn_Logo.svg.png"  
              alt="" />
           </div>
         
      {/* <h1 className="pt-[250px] text-center font-bold text-xl">You are not logged in</h1> */}
         <form className='mt-5 flex flex-col'>
          <input 
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='p-1 my-1 mx-10 w-[300px] h-[40px] text-[20px] rounded-[5px] border border-black hover:border-[2px]  hover:bg-slate-200'
            placeholder='Enter your full name' 
            type="text" />
          <input
            className="p-1 my-1 mx-10 w-[300px] h-[40px] text-[20px] rounded-[5px] border border-black hover:border-[2px]  hover:bg-slate-200"
            type="text"
            value={profilePic}
            onChange={(e) => setProfilePic(e.target.value)}
            placeholder='Profile pic Url' />
          <input
            className="p-1 my-1 mx-10 w-[300px] h-[40px] text-[20px] rounded-[5px] border border-black hover:border-[2px]  hover:bg-slate-200"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Email'/>  
         <input
           className="p-1 my-1 mx-10 w-[300px] h-[40px] text-[20px] rounded-[5px] border border-black hover:border-[2px]  hover:bg-slate-200"
           type="password"
           value={password}
           onChange={(e) => setpassword(e.target.value)}
           placeholder='Password' />  

         <button 
           className="mt-3 mx-20 border p-1 rounded-[5px] text-white bg-blue-600 hover:bg-blue-800 text-lg "
           onClick={loginToApp}>
           Sign In</button>  
   </form> 
        <div className="mx-[66px] text-sm">
            <p>If you are not a memeber, <span className="text-blue-600 cursor-pointer hover:font-semibold hover:text-blue-800" onClick={register}>Register Now</span></p>
        </div>
        </div>
    </div>
  )
}

export default Login
