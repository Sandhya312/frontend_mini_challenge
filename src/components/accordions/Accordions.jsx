
 import { useState } from "react"

const Accordions = () =>{

    const [clickedIndex,setClickedIndex] = useState(null);
    const [isOpen,setIsOpen] = useState(false);
    const [prevSt,setPrev] = useState(null);
    const [active, setactive]= useState(false);

    const accordionHandler = (i) =>{
           console.log(i,isOpen);
           setClickedIndex(i);
           setactive(!active);
           if(isOpen) {
            setPrev(i);
           }
    }

    const multipleAllowHandler = (e)=>{
        setIsOpen(e.target.checked);
        
    }

    return (
        <>
         <div style={{
            background:"red",
            padding:"0.5rem",
            width:"auto",
            height:"auto"

         }}>
            <label htmlFor="">Is multiple open accordion allowed</label>
            <input type="checkbox" name="open" checked={isOpen} onChange={multipleAllowHandler} id="" />
         {
           Array(3).fill().map((_,index)=>{
            return <div key={index} style={{
                background:"green",
                height:"auto",
                width:"70rem",
                margin:"0.5rem"
             }}>
               <div 
                style={{
                    display:"flex",
                    justifyContent:"space-between",
                    padding:"1rem",
                    alignItems:"center",
                }}
               >
               accordions{index+1}
               <button
                onClick={()=>{accordionHandler(index)}}
               >➕</button>
                </div> 
                <div style={{
                    background:"green",
                    display:(((index===clickedIndex && active) && isOpen )|| (index===clickedIndex && active)) ? "block":"none",
                }} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa eligendi veniam maxime velit consectetur culpa sequi! Dignissimos, dolores nam atque sint tempore, fuga illum ratione iste mollitia laboriosam, asperiores laudantium.
                { index==clickedIndex ? clickedIndex :"" }
                </div>
               </div>
           })
         }
          

          
         </div>

        </>
    )
}

export default Accordions;