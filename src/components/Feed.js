import React, {useState, useEffect} from 'react'
import InputOption from './InputOption'
import Post from './Post';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import { db } from '../firebase';
import firebase from 'firebase/compat/app';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';

const Feed = () => {
    const user = useSelector(selectUser)
    const [input, setInput] = useState("")
    const [posts, setPosts] = useState([]);
   
   
    useEffect(() => {
        db.collection("posts")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => 
            setPosts(
                 snapshot.docs.map(doc => ({
                 id: doc.id,
                 data: doc.data()
                }))
            )
        )
    }, [])

    const sendPost = (e) => {
        e.preventDefault();

        db.collection("posts").add({
            name:user.displayName,
            description: user.email,
            message: input,
            photoUrl : user.photoUrl || "",
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
        setInput("")
   }
  return (
    <div className="w-[40%] mx-2 my-2">
        <div className="bg-white rounded-lg p-2">
         <div className="">
          <div className="flex py-2 justify-stretch">
           <div className="mx-2 border border-gray-600 flex rounded-full w-[550px]">
              <form >
               <input 
                  type="text" 
                  value={input} 
                  onChange={(e) => setInput(e.target.value)} 
                  placeholder="  ✏   Start a post" 
                  className=" mx-1 w-[400px] outline-none rounded-full p-3"/>
               <button onClick={sendPost} className="hidden border my-2 p-2 rounded-lg">Send</button>
              </form>
              </div>
              </div>
             </div>
            <div className="flex justify-evenly my-1">
              <InputOption Icon={ImageIcon} title='Photo' />
              <InputOption Icon={SubscriptionsIcon} title='Video'/>
              <InputOption Icon={EventNoteIcon} title='Event'/>
              <InputOption Icon={CalendarViewDayIcon} title='Write article'/>
         </div> 
        </div>
        
        {posts.map(({ id, data: { name, description, message,
         photoUrl} }) => 
        ( 
        <div className="my-1 rounded-lg py-1">
           <Post 
              key={id}
              name={name}
              description={description}
              message={message}
              photoUrl={photoUrl}/>
           </div>   
        ))}
    
    </div>
    
  )
}

export default Feed
