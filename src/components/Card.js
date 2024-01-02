import React from 'react'
import {FcLike} from 'react-icons/fc'
import { FcLikePlaceholder } from "react-icons/fc";
import { toast } from 'react-toastify';
const Card = (props) => {
  let course=props.course;
  let likedcourses=props.likedcourses;
  let setLikedCourses=props.setLikedCourses;
  function likedHandler(){
    if(likedcourses.includes(course.id)){
       setLikedCourses((prev)=> prev.filter((cid)=>(cid!==course.id)))
       toast.warning("liked removed");
    }
    else{
      if(likedcourses.length===0){
        setLikedCourses([course.id]);
      }
      else{
        setLikedCourses((prev)=>[...prev,course.id]);
      }
       toast.success("liked successfully")
    }
}
  return (

    <div className='w-[300px] bg-slate-600 rounded-md overflow-hidden'>
      <div className='relative '>
        <img src={course.image.url} /> 
     
      <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2
      bottom-3 grid place-items-center'>
      <button onClick={likedHandler}>
        {
          !likedcourses.includes(course.id)?
          (<FcLikePlaceholder fontSize="1.7rem"/>)
          :(<FcLike fontSize="1.7rem"/>)
        } 
         </button>
      </div>
      </div> 
       
       <div className='p-4'>
        <p className='text-white text-2xl text-semibold leading-6'>{course.title} </p>
        <p className='mt-2 text-white'> 
        {
          course.description.length>100?
          (course.description.substr(0,100))+"...":
          (course.description)
        }
        </p>
       </div>
    </div>
  )
}

export default Card
