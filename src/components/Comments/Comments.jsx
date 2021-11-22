import React from 'react';
import {useNavigate} from 'react-router-dom';
import{Button} from '@mui/material';

const Comments =()=>{

    const navigate = useNavigate()
    const clickHandler = ()=>{
        navigate("/reviewfeedback");
    
    }
    


return(
    <div>
         <Button variant="contained" onClick={clickHandler}>Next</Button>
    </div>
)
}

export default Comments;