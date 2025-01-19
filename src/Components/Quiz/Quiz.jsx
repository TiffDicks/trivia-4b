import React, { useState } from 'react'
import './Quiz.css'
import { data } from '../../assets/data';

const Quiz = () => {
    
    let [index,setIndex] = useState(0);
    let [lock,setLock] = useState(false);
    let[score,setScore] = useState(0);
    let[result,setResult]= useState(false);
    let[selectedOption, setSelectedOption] = useState(null);

    // let Option1 = useRef(null);
    // let Option2 = useRef(null);
    // let Option3 = useRef(null);
    // let Option4 = useRef(null);

    // let option_array = [Option1,Option2,Option3,Option4];

    const checkAns = (e, optionIndex) => { 
        if (!lock) {
            setSelectedOption(optionIndex);
            setLock(true);
           
            }
    };
            
  
     const next = ()=>{
        if (lock) {
            if (selectedOption === data[index].ans) {
                setScore((prevScore) => prevScore +1);
            }
                if (index === data.length - 1) {
                    setResult(true);

                } else {
           
            setIndex((prevIndex) => prevIndex + 1);
            setSelectedOption(null);
            setLock(false);
            
            }
        }
    };
       
    const back = () => {
        if (index > 0) {
            setIndex((prevIndex) => prevIndex -1);
            setSelectedOption(null);
            setLock(false);
        }
    };

    const reset = () => {
        setIndex(0);
        setScore(0);
        setLock(false);
        setResult(false);
        setSelectedOption(null);
    };

    return (
        <div className="container">
        <h1>Math Trivia</h1>
        <hr />
        {!result ? (
            <> 
            <h2>{index+1}. {data[index].question}</h2>
          
    
            <ul>
                <li
            
                    className={selectedOption === 1 ? "highlight" : ""}
                    onClick={(e) => checkAns(e, 1)}
                >
                    {data[index].option1}


                </li>
                <li
            
                    className={selectedOption === 2 ? "highlight" : ""}
                    onClick={(e) => checkAns(e, 2)}
                >
                    {data[index].option2}


                </li>
                <li
                    className={selectedOption === 3 ? "highlight" : ""}
                    onClick={(e) => checkAns(e, 3)}
                >
                    {data[index].option3}
                </li>
                <li
                    className={selectedOption === 4 ? "highlight" : ""}
                    onClick={(e) => checkAns(e, 4)}
                >
                    {data[index].option4}
                </li>
            </ul>
            <div className="navigation">
                <button
                    onClick={back}
                    disabled={index === 0} 
                >
                    Back
                </button>
                <button
                    onClick={next}
                    disabled={!lock} 
                >
                    Next
                </button>
            </div>
            <div className="index">{index + 1} of {data.length} questions</div>
        </>
        )
: (
        <>
            <h2>You Scored {score} out of {data.length}</h2>
            <button onClick={reset}>Reset</button>
</>
)}
</div>);
};
export default Quiz;
