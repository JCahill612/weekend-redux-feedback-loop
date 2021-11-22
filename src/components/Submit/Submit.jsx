import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom';
import{Button} from '@mui/material';
import TextField from '@mui/material/TextField';



const Submit =()=>{

const navigate = useNavigate()

const handleClick = ()=>{

    navigate("/");
    

}

return(
<>
    <div>
        <h1>Thank You For Your Feedback!</h1>
        </div>
    <div>
        <Button variant="contained" onClick={handleClick}>Leave New Feedback</Button>
    </div>
    </>
)
}

export default Submit;