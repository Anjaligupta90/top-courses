import React, { useEffect, useState } from "react";
import { apiUrl,filterData } from "./data";
import Navbar from "./componants/Navbar";
import Cards from "./componants/Cards";
import Filter from "./componants/Filter";
import { toast} from "react-toastify";
import Spinner from "./componants/Spinner";

const App = () => {
  const [Courses, setCourses]=useState(null);
  const [loading,setLoading]=useState(true);
  const [category,setcategory]=useState(filterData[0].title);

    async function fetchData() 
    {
      setLoading(true);

      try{
        let res =await fetch(apiUrl);
        let output=await res.json();
        //save data
        setCourses(output.data);
    
      }
      catch(error)
      {
        toast.error("somthing went wrong!");
      }
      setLoading(false);
    }
   //call in useefect

   useEffect(()=>{
     fetchData();
   },[])


  return (
    <div className="min-h-screen flex flex-col bg-bgDark2">
    
    <div>
    <Navbar/>
    </div>

    <div>
    <Filter 
      filterData={filterData} categry={category} setcategory={setcategory}/>
    </div>

     <div className="w-11/12 max-w-[1200px] 
        mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
    {
      loading ? (<Spinner/>) : (<Cards Course={Courses} category={category}/>)
    }
     </div>

    </div>
  );
};

export default App;
