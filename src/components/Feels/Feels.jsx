import React from 'react';
import {useNavigate} from 'react-router-dom';
import{Button} from '@mui/material';


const Feels =()=>{

    const navigate = useNavigate()

const clickHandler = ()=>{
    navigate("/understanding");

}

return(
    <div>
        <Button variant="contained" onClick={clickHandler}>Next</Button>
    </div>
)
}

export default Feels;