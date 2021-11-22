import React from 'react';
import {useNavigate} from 'react-router-dom';
import{Button} from '@mui/material';


const Understanding =()=>{

    const navigate = useNavigate()
    
    const clickHandler = ()=>{
    navigate("/support");

}


return(
    <div>
         <Button variant="contained" onClick={clickHandler}>Next</Button>
    </div>
)
}

export default Understanding;