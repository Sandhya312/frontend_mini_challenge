import { useState } from "react";

const Counter = ()=>{

    const [count,setCount] = useState(0);
    const [changeval,setChangeVal] =useState(1);

    const decrementCountHandler = ()=>{
          setCount((prev)=>{
             prev -=changeval;
             return prev;
          })
    }

    const incrementCountHandler = () =>{
          setCount((prev)=>{
            prev +=changeval;
            return prev;
          })
    }

    const resetCount = () =>{
           setCount((prev)=>{
            prev=0;
            return prev;
           })
    }

    const changeValHandler = (e) =>{
        const val  = e.target.value;
        setChangeVal(Number(val));
    }

    return (
        <>
         <h1>{count}</h1>
         <button onClick={()=>{decrementCountHandler()}}>-</button>
         {" "}
         <button onClick={()=>{incrementCountHandler()}}>+</button>
         <div style={{display:"flex",
                     alignItems:"center", width:"20rem",justifyContent:"space-around"}}><p>Change value by</p> <input value={changeval} type="number" onChange={changeValHandler}  /></div>

        <button onClick={()=>{resetCount()}}>Reset</button>
        </>
    )
};

export default Counter;