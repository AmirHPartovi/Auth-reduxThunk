import logo from './logo.svg';
import './App.css';
import {Button, Grid, TextField, Typography} from '@mui/material'
import { useState } from 'react';
import LockPersonIcon from '@mui/icons-material/LockPerson';

function App() {
  const [form,setForm] = useState({
    userName:'',passWord:''
  })
  return (
    <Grid container justifyContent={'center'} mt={4}>
      <Grid container item xs={4} height={400} alignItems={'center'} justifyContent={'center'}>
        <Grid container item xs={12} alignItems={'center'} direction={'column'} >
            <LockPersonIcon fontSize='large' color='primary'/>
            <Typography variant='h4'>Log In</Typography>
        </Grid>
        <Grid container justifyContent={'center'} item xs={12}>
            <form  style={{display:'flex' , flexDirection:'column', alignItems:'center' ,}}>
              <TextField  value={form.userName} name='userName' label={'User Name'} sx={{my:2 , width:250}}/>
              <TextField  value={form.passWord} name='passWord' label={'Password'} sx={{my:2, width:250}}/>
              <Button variant='contained' sx={{borderRadius:2 , width:250}}>
                LOG IN
              </Button>
            </form>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;



{/* <LockPersonIcon item color='primary' fontSize='large'/>
<Typography item variant='h4'>Log In</Typography>
<Grid container item alignItems={'center'} justifyContent={'center'}gap={2}>
<form container item direction='column' alignItems={'center'} justifyContent={'center'}gap={2}>
  <TextField item name='userName' value={form.userName} type={'text'} label={'User Name'} />
  <TextField item name='passWord' value={form.passWord} type={'password'} label={'Password'}  />
</form> */}