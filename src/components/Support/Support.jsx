import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom';
import{Button} from '@mui/material';
import TextField from '@mui/material/TextField';
import {useDispatch} from 'react-redux';

const Support =()=>{

const[ value, setValue] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleClick = ()=>{
        dispatch({
            type: "ADD_FEEDBACK",
            payload : {support : value}
        })
        navigate("/comments");
    
    }
    


return(
<>
    <div>
        <h1>How well are you being supported?</h1>
     <TextField
          id="outlined-error-helper-text"
          type="number"
          label="Support?"
          value={value}
          onChange={ (event)=>setValue(event.target.value)}
          helperText={value === ""? "Cannot be Empty": ""}
        />
    </div>
    <div>
        <Button variant="contained" onClick={handleClick}disabled={value===""}>Next</Button>
    </div>
    </>
)
}

export default Support;