import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom';
import{Button} from '@mui/material';
import TextField from '@mui/material/TextField';
import {useDispatch} from 'react-redux';

const Understanding =()=>{

const[ value, setValue] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const clickHandler = ()=>{
        dispatch({
            type: "ADD_FEEDBACK",
            payload : {understanding : value}
        })
    navigate("/support");

}


return(
<>
    <div>
        <h1>How well are you understanding the content?</h1>
     <TextField
          id="outlined-error-helper-text"
          type="number"
          label="Understanding?"
          value={value}
          onChange={ (event)=>setValue(event.target.value)}
          helperText={value === ""? "Cannot be Empty": ""}
        />
    </div>
    <div>
        <Button variant="contained" onClick={clickHandler}disabled={value===""}>Next</Button>
    </div>
    </>
)
}

export default Understanding;