import React,{useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import{Button} from '@mui/material';
import {useSelector} from 'react-redux';
import axios from 'axios';

const ReviewFeedback =()=>{

const navigate = useNavigate()
// const[reviewValues, setReviewValues] = useState({})
// const feedback = useSelector( (storeInstance)=>{
//     return storeInstance.addFeedbackReducer
// })

const feedback = useSelector(state => state.addFeedbackReducer);
console.log(feedback);
// useEffect(()=>{
//     setReviewValues([...feedbackFormValues])
// },[])
const dataToSend = {
    feeling: feedback[0].feels,
    understanding: feedback[1].understanding,
    support: feedback[2].support,
    comments: feedback[3].comments,
}
const sendFeedback = () => {
    //post to db
    axios
        .post('/feedback', dataToSend).then(response => {
            navigate("/submit");
        }).catch(error => {
            console.log('error in posting feedback', error);
        });
}

    const handleClick = ()=>{
        sendFeedback();  
        console.log(dataToSend); 
    }

return(
  
    <div>
        <h1>Review Your Feedback</h1>
        <h2>Feelings: {feedback[0].feels}</h2>
        <h2>Understanding: {feedback[1].understanding}</h2>
        <h2>Support: {feedback[2].support}</h2>
        <h2>Comments: {feedback[3].comments}</h2>
         <Button variant="contained" onClick={handleClick}>Submit</Button>
    </div>
)
}

export default ReviewFeedback;