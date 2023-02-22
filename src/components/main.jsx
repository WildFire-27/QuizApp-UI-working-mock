import React, { useState } from 'react';
// import QuestionCard from './QuestionCard';
// import Heading from './heading';
import AddQuestion from './AddQuestion';
import FilterQuestion from './FilterQuestion';
import questionData from './questionData';
// import TotalTime from './TotalTime';

const Main = () => {
    const [question, setQuestion] = useState(questionData);
    const [show, setShow] = useState(false)

    function addNote(newCard) {
        setQuestion(prevCard => {
            return [newCard, ...prevCard];
        });
    }
    // function filterCard(id) {
    //     setQuestion(prevCard => {
    //         return prevCard.filter((cardItem, index) => {
    //             return index !== id;
    //         });
    //     });
    // }

    const toShowFirst = () => {
        setShow(!show)
    }
    // const categoryQ = (question)=>{
      
    //         console.log(question.length)
        
    // }
    return (
        <div>
{/* {
    console.log("show someuser function here adding ")
} */}
            <h1 style={{margin:"20px auto"}}>Quiz App 🤔💭</h1>
            <button className='btnLeft' id="closeBtn" onClick={toShowFirst}>Click here to add new question</button>

            {show === true ? <AddQuestion onAdd={addNote} /> : ""}
          
            <div id="bgbg">
                <h3>Total Questions:{question.length}</h3>
                <h3>Score: 0</h3>
                <h3>Time Left⌚:20</h3>
            </div>
            <FilterQuestion question={question} />
            <br/>
            <button className='btnLeft' style={{padding:"20px 50px"}}>Submit</button>

        </div>
    )
}
export default Main;