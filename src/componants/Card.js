import React from "react";
import { FcLike } from "react-icons/fc";
import { FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

const Card = (props) =>
    {
        let c=props.co;
        let likedcourse=props.likedcour;
        let setlike=props.setlikecourse;

        function clickHandler()
        {
          //check kro ki course ki id phle h pdi h ya nhi
          if(likedcourse.includes(c.id))
          {
            setlike((prev) => prev.filter((curid)=> (curid !==c.id)));
            toast.warning("like removed");
          }
          else{
            //phle se like nhi h
            if(likedcourse.length===0)
            {
                setlike([c.id]);
            }
            else{
                setlike((prev) => [...prev, c.id]);
            }
            toast.success("Like Successfully");
          }
        }

    return (
<div  className='w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden'>

  <div className='relative'> 
  <img src={c.image.url}></img>

    <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px]
            grid place-items-center'>
        <button onClick={clickHandler}>
        {
            likedcourse.includes(c.id) ? 
            (<FcLike fontSize="1.75rem" />) :
            (<FcLikePlaceholder fontSize="1.75rem"/>) 
        }
        </button>
        </div>
    </div>

 <div className='p-4'>
  <p className="text-white font-semibold text-lg leading-6">{c.title}</p>
  <p className='mt-2 text-white'>
    {
        c.description.length > 100 ? (c.description.substr(0,100) + "...") : (c.description + "...")
    }
  </p>
   </div>
</div>

    )
}

export default Card