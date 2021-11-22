import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom';
import{Button} from '@mui/material';
import TextField from '@mui/material/TextField';


const Feels =()=>{

const[ value, setValue] = useState("")

const navigate = useNavigate()

const clickHandler = ()=>{

    navigate("/understanding");
    

}

return(
<>
    <div>
        <h1>How are you feeling today?</h1>
     <TextField
          id="outlined-error-helper-text"
          type="number"
          label="Feeling?"
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

export default Feels;