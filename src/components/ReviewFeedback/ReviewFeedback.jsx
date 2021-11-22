import React,{useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import{Button} from '@mui/material';
import {useSelector} from 'react-redux';

const ReviewFeedback =()=>{

const navigate = useNavigate()
// const[reviewValues, setReviewValues] = useState({})
const feedbackFormValues = useSelector( (storeInstance)=>{
    return storeInstance.addFeedbackReducer
})

// useEffect(()=>{
//     setReviewValues([...feedbackFormValues])
// },[])

    const clickHandler = ()=>{
        navigate("/");
    
    }



return(
  
    <div>
        <h1>Review Your Feedback</h1>
        <h2>Feelings: {feedbackFormValues[0].feels}</h2>
        <h2>Understanding: {feedbackFormValues[1].understanding}</h2>
        <h2>Support: {feedbackFormValues[2].support}</h2>
        <h2>Comments: {feedbackFormValues[3].comments}</h2>
         <Button variant="contained" onClick={clickHandler}>Submit</Button>
    </div>
)
}

export default ReviewFeedback;