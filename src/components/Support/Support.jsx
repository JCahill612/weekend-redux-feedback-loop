import React from 'react';
import {useNavigate} from 'react-router-dom';
import{Button} from '@mui/material';

const Support =()=>{

    const navigate = useNavigate()

    const clickHandler = ()=>{
        navigate("/comments");
    
    }
    


return(
    <div>
         <Button variant="contained" onClick={clickHandler}>Next</Button>
    </div>
)
}

export default Support;