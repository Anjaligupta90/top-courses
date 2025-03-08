import React, { useState, useEffect } from 'react'
import Card from './Card';

const Cards= (props) =>
{
   let Cour=props.Course;
   let category=props.category;

   const [likecourse,setlikecourse]=useState([]);
  
   function getcourses()
   {
      if(category=== "All")
     {
      let allcourses=[];
      Object.values(Cour).forEach(array =>
      {
         array.forEach(courdata =>{   
          allcourses.push(courdata);
         })
      }
      )
      return allcourses;
     }
     else{
      // main sirf specfic title wala pass krunga
      return Cour[category];
     }
   }
  
   useEffect(() => {
      // Retrieve liked courses from localStorage on mount
      const storedLikes = JSON.parse(localStorage.getItem('likedCourses')) || [];
      setlikecourse(storedLikes);
  }, []);

  useEffect(() => {
      // Update localStorage whenever likedCourses changes
      localStorage.setItem('likedCourses', JSON.stringify(likecourse));
  }, [likecourse]);

   return(
    <div className='flex flex-wrap justify-center gap-4 mb-4'>
     {
        getcourses().map((cou) =>(
         <Card key={cou.id} co={cou} likedcour={likecourse} setlikecourse={setlikecourse}/>
        ))
     }
    </div>
   )
}

export default Cards