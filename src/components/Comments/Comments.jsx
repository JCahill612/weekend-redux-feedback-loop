import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom';
import{Button} from '@mui/material';
import TextField from '@mui/material/TextField';
import {useDispatch} from 'react-redux';

const Comments =()=>{

const[ value, setValue] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleClick = ()=>{
        dispatch({
            type: "ADD_FEEDBACK",
            payload : {comments : value}
        })
        navigate("/reviewfeedback");
    
    }

return(
<>
    <div>
        <h1>Any comments you want to leave?</h1>
     <TextField
          id="outlined-error-helper-text"
          label="Comments?"
          value={value}
          onChange={ (event)=>setValue(event.target.value)}
        />
    </div>
    <div>
        <Button variant="contained" onClick={handleClick}>Next</Button>
    </div>
    </>
)
}

export default Comments;