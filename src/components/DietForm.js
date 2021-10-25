import React from 'react'
import { useEffect, useState } from 'react';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function DietForm({ cals , valError , meal , setCals , setMeal , setNoOfMeals , noOfMeals , generateHandler }) {



    return (
        <div>
            <Grid container spacing={5}>

        <Grid item lg={2} md={3}  >
          <div style={{fontWeight : meal == 'Anything' ? 600 : 200, cursor:'pointer'}} 
          onClick={()=>setMeal('Anything')} >
          <img style={{height:'150px',width:'150px' , borderRadius:'30px' , 
          border: meal == 'Anything' ? '4px solid black' : '2px solid grey' }} 
          src={'https://media.healthyfood.com/wp-content/uploads/2020/12/3-ways-to-keep-red-meat-in-your-diet-and-be-healthier-iStock-1155240408-500x409.jpg'} />
          <p>Anything</p>
          </div>
        </Grid>


        <Grid  item lg={2} md={3} >
          <div  style={{fontWeight : meal == 'Paleo' ? 700 : 200, cursor:'pointer'}} 
          onClick={()=>setMeal('Paleo')}>
          <img style={{height:'150px',width:'150px' , borderRadius:'30px' , 
          border: meal == 'Paleo' ? '4px solid black' : '2px solid grey' }} 
          src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaQE8jNzYTQDc9E23soJOJcz9nEO3IhUJVzfTMMa98o2fzZ8E53lmla43vCbSBft9lD5s&usqp=CAU'} />
          <p>Paleo</p>
          </div>
        </Grid>


        <Grid  item lg={2} md={3} >
          <div  style={{fontWeight : meal == 'Vegetarian' ? 600 : 200, cursor:'pointer'}} 
          onClick={()=>setMeal('Vegetarian')}>
          <img style={{height:'150px',width:'150px' , borderRadius:'30px' , 
          border: meal == 'Vegetarian' ? '4px solid black' : '2px solid grey' }} 
          src={'https://cdn.britannica.com/17/196817-050-6A15DAC3/vegetables.jpg'} />
          <p>Vegetarian</p>
          </div>
          </Grid>


        <Grid  item lg={2} md={3} >
          <div  style={{fontWeight : meal == 'Vegan' ? 600 : 200, cursor:'pointer'}} 
          onClick={()=>setMeal('Vegan')}>
          <img style={{height:'150px',width:'150px' , borderRadius:'30px' , 
          border: meal == 'Vegan' ? '4px solid black' : '2px solid grey' }} 
          src={'https://i.insider.com/60ff1914f350d50019590549?width=1136&format=jpeg'} />
          <p>Vegan</p>
          </div>
        </Grid>


        <Grid  item lg={2} md={3} >
          <div  style={{fontWeight : meal == 'Ketogenic' ? 600 : 200 , cursor:'pointer'}} 
          onClick={()=>setMeal('Ketogenic')}>
          <img style={{height:'150px',width:'150px' , borderRadius:'30px' , 
          border: meal == 'Ketogenic' ? '4px solid black' : '2px solid grey' }} 
          src={'https://res.cloudinary.com/grohealth/image/upload/f_auto,fl_lossy,q_auto/v1583506868/DCUK/Content/Ketogenic-diet-FAQs.png'} />
          <p>Ketogenic</p>
          </div>
        </Grid>


        <Grid  item lg={2} md={3} >
          <div  style={{fontWeight : meal == 'Meditarranian' ? 600 : 200 , cursor:'pointer'}} 
           onClick={()=>setMeal('Meditarranian')}>
           <img style={{height:'150px',width:'150px' , borderRadius:'30px' , 
           border: meal == 'Meditarranian' ? '4px solid black' : '2px solid grey' }} 
           src={'https://i.insider.com/5b33c37a1ae6621d008b499c?width=1136&format=jpeg'} />
           <p>Meditarranian</p>
        </div>
        </Grid>
      </Grid>


      <br/><br/>


      <Container style={{textAlign:'center'}} >
        <span>I want to Eat : </span>
        <span><TextField label='Calories' type='number' value={cals} min="1" onChange={(e)=>setCals(e.target.value)}/></span>
      </Container>


      <br/><br/>


      <Container style={{textAlign:'center'}} >
      <span>In : </span>
      <span>
      <FormControl>
        <InputLabel id="demo-simple-select-label">Meals</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={noOfMeals}
          label="Age"
          onChange={e=>setNoOfMeals(e.target.value)}
        >
          <MenuItem value={2}>Two Meals</MenuItem>
          <MenuItem value={3}>Three Meals</MenuItem>
          <MenuItem value={4}>Four Meals</MenuItem>
        </Select>
      </FormControl>
      </span>

      <br/><br/>

      <Button size='large' variant='contained' onClick={generateHandler} >Generate</Button>

      {valError && <div style={{margin:'20px'}} >
        <Alert severity="error">{valError}</Alert>
      </div>}
      </Container>
        </div>
    )
}
