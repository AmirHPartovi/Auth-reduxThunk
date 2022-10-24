import './App.css';
import {Button, Grid, TextField, Typography} from '@mui/material'
import { useState } from 'react';
import LockPersonIcon from '@mui/icons-material/LockPerson';
import { useDispatch, useSelector } from 'react-redux';
import { AuthAsyncThunk } from './slice/AuthSlice';

function App() {
  const [form,setForm] = useState({
    userName:'',passWord:''
  })
  const dispatch = useDispatch()
  const auth = useSelector(state => state.auth)

  const handleChange = e =>{
      setForm({...form,[e.target.name]:e.target.value})
  }

  const handleSubmit = e =>{
    e.preventDefault()
    dispatch(AuthAsyncThunk(form))
    
  }
  if(auth.isLogin){
    return <div>Welcome</div>
  }
  return (
    <Grid container justifyContent={'center'} mt={4}>
      <Grid container item xs={4} height={400} alignItems={'center'} justifyContent={'center'}>
        <Grid container item xs={12} alignItems={'center'} direction={'column'} >
            <LockPersonIcon fontSize='large' color='primary'/>
            <Typography variant='h4'>Log In</Typography>
        </Grid>
        <Grid container justifyContent={'center'} item xs={12}>
            <form onSubmit={handleSubmit} style={{display:'flex' , flexDirection:'column', alignItems:'center' ,}}>
              <TextField onChange={handleChange} type={'text'} value={form.userName} name='userName' label={'User Name'} sx={{my:2 , width:250}}/>
              <TextField onChange={handleChange} type={'password'} value={form.passWord} name='passWord' label={'Password'} sx={{my:2, width:250}}/>
              <Button type={'submit'} variant='contained' sx={{borderRadius:2 , width:250}}>
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