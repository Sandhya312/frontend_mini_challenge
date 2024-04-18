
import { useState } from "react";

const AnagramChecker = () =>{

    const [isAnagram,setAnagram] = useState(false);
    const [anagramMsg, setAnagramMsg] = useState("default");
    const [textA, settextA] = useState("");
    const [textB, setTextB] = useState("");

    const textAHandler  = (e) =>{
            settextA(e.target.value);
    }

    const textBHandler = (e) =>{
          setTextB(e.target.value);
    }

    const checkAnagram = () =>{
         if(textA.length ===0 || textB.length===0){
            setAnagram(true);
            setAnagramMsg("One of them is empty");
            return;
         }

         if(textA.length !== textB.length){
            setAnagram(true);
            setAnagramMsg("They are not anagram");
            return;
         }
         let str1 = textA.toLowerCase().split(" ").join("");
         let str2 = textB.toLowerCase().split(" ").join("");
         str1 = str1.split("").sort().join("");
         str2 = str2.split("").sort().join("");
         if(str1 === str2) {
            setAnagram(true);
            setAnagramMsg("The strings are anagram !!");
            return;
         }else{
            setAnagram(true);
            setAnagramMsg("they are not anagram strings !!");
            return;
         }
    }

    return (
        <>
        <div style={{
            display:"flex",
            width:"40rem",
            justifyContent:"space-around",
            alignItems:"center"
        }}>
            <input type="text" value={textA} onChange={textAHandler} />
            <input type="text" value={textB} onChange={textBHandler} />
            <button onClick={()=>{checkAnagram()}}  >Check Anagram</button>
        </div>
        {isAnagram && <p>{anagramMsg}</p>}
        </>
    )
}

export default AnagramChecker;