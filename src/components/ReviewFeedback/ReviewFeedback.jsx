import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom';
import{Button} from '@mui/material';

const ReviewFeedback =()=>{

    const navigate = useNavigate()
    const clickHandler = ()=>{
        navigate("/");
    
    }
    


return(
  
    <div>
         <Button variant="contained" onClick={clickHandler}>Submit</Button>
    </div>
)
}

export default ReviewFeedback;