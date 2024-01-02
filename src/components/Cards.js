import React from 'react'
import Card from './Card';
import { useState } from 'react';
// import { calculateNewValue } from '@testing-library/user-event/dist/utils';
const Cards = (props) => {
   let courses=props.courses;
   let category=props.category;
   const [likedcourses,setLikedCourses]=useState([]);

    function getCourses(){
        let allCourses=[];
        if(category==="All"){
          Object.values(courses).forEach(array =>{
            array.forEach(courseData=>{
                allCourses.push(courseData);
            })
        })
        return allCourses;
        }
        else{
          return courses[category]
        }
      
    }
  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>
      {
        getCourses().map((course)=>(
            <Card key={course.id} course={course}
            likedcourses={likedcourses}
            setLikedCourses={setLikedCourses}/>
        ))
      }
    </div>
  )
}

export default Cards
