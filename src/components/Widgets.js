import React from 'react'
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
//import { Subtitles } from '@mui/icons-material';

const Widgets = () => {
    const newsArticle = (heading, subtitles) => {
       return (
        <div className="flex gap-1 p-1 mx-1 my-2 rounded-lg hover:bg-slate-200">
        <div className="">
            <span className='text-blue-500'><FiberManualRecordIcon fontSize='15px'/></span>
        </div>
        <div className="">
            <h1 className="font-medium text-2x">{heading}</h1>
            <p>{subtitles}</p>
        </div>
    </div>

       )
       
    }
  return (
    <div className="mt-2 ml-[72%] w-[20%] fixed rounded-lg">
        <div className="bg-white rounded-lg pt-2 pl-3 flex gap-1">
            <h2 className="font-bold">LinkedIn News</h2>
            <span className="mt-[0.5px] h-[1px] text-[1px]"><InfoIcon fontSize='small' /></span> 
         </div>
         <div className="bg-white p-1 rounded-b-lg">
             {newsArticle("Jailer showcase is online now","In 30 mins, 10M views")}
             {newsArticle("BMW is going lunch a new series","Guess the name")}
             {newsArticle("Delhi On Alert As Haryana Violence Spreads To Affluent Gurugram ..."," 3 death in Haryana incident")}
             {newsArticle("President on Article 370 after J&K Constituent Assembly","held on 2020")}
           </div>
    </div>
  )
}

export default Widgets