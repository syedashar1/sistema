import { useEffect, useState } from 'react';
import './App.css';
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
import DietForm from './components/DietForm';

function App() {

  
  const om ={name:'Oatmeal with Milk' , serving : '200 g' , calories : 373 , pic :'https://www.eatthis.com/wp-content/uploads/sites/4/2018/12/bowl-plain-oatmeal-milk-breakfast.jpg' }
  const pm ={name:'Peameal bacon' , serving : '2 slices' , calories : 197 , pic :'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Peameal_bacon_in_a_pan.JPG/170px-Peameal_bacon_in_a_pan.JPG' }
  const pm2 ={name:'Peameal bacon' , serving : '4 slices' , calories : 384 , pic :'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Peameal_bacon_in_a_pan.JPG/170px-Peameal_bacon_in_a_pan.JPG' }
  
  const nb ={name:'Nuts and Nut Butters' , serving : '50 g' , calories : 295 , pic :'http://s3.amazonaws.com/img.mynetdiary.com/blog/are-you-including-nut-butter-in-your-weight-loss-plan-are-nut-butters-healthy.jpeg' }
  const nb2 ={name:'Nuts and Nut Butters' , serving : '100 g' , calories : 588 , pic :'http://s3.amazonaws.com/img.mynetdiary.com/blog/are-you-including-nut-butter-in-your-weight-loss-plan-are-nut-butters-healthy.jpeg' }
  const as ={name:'Avacado Sandwich' , serving : '1' , calories : 330.9 , pic :'https://afm-6b83.kxcdn.com/wp-content/uploads/2018/01/Pic-789-Tuna-Avocado-Sandwich-Final-low.jpg' }
  
  const sb ={name:'Strawberry Protien Shake' , serving : 1 , calories : 204 , pic :'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F404644.jpg&w=380&h=505&c=sc&poi=face&q=85' }
  const sb2 ={name:'Strawberry Protien Shake' , serving : 2 , calories : 408 , pic :'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F404644.jpg&w=380&h=505&c=sc&poi=face&q=85' }
  const steak ={name:'Salt-and-Pepper Steak' , serving : '200 g' , calories : 492 , pic :'https://assets.bonappetit.com/photos/57afe97653e63daf11a4e809/16:9/w_1280,c_limit/salt-and-pepper-rib-eye.jpg' }
  const chicken ={name:'Chicken Schnitzel' , serving : '1 fillet' , calories : 300 , pic :'https://cfdefaultstorage.blob.core.windows.net/cfimages/data/skirt_steak_top_large_11.jpg' }

  const gc ={name:'Green Curry' , serving : '1' , calories : 365 , pic :'https://images.themodernproper.com/billowy-turkey/production/posts/2019/vegetarian-green-curry-budha-bowl-11.jpg?w=1800&auto=compress%2Cformat&fit=crop&fp-x=0.5&fp-y=0.5&dm=1599768728&s=4054eceb4600ff295051515e9d312bc1' }
  const chili ={name:'Vegetarian Chili' , serving : '1 cup' , calories : 272 , pic :'https://www.ambitiouskitchen.com/wp-content/uploads/2020/01/The-Best-Vegetarian-Chili-4-725x725-1.jpg' } 

  const banana1 = {name:'Banana', serving : 1 , calories : 109 , pic : 'https://media.istockphoto.com/photos/single-fresh-raw-clean-isolated-one-alone-horizontally-oriented-on-picture-id1266340637?b=1&k=20&m=1266340637&s=170667a&w=0&h=m215bqBaJETpZ5Tuyl2dhIdcfqpecCxBM7tXyAZzmn8=' }
  const banana2 = {name:'Bananas', serving : 2 , calories : 218 , pic : 'https://media.istockphoto.com/photos/single-fresh-raw-clean-isolated-one-alone-horizontally-oriented-on-picture-id1266340637?b=1&k=20&m=1266340637&s=170667a&w=0&h=m215bqBaJETpZ5Tuyl2dhIdcfqpecCxBM7tXyAZzmn8=' }
  const banana3 = {name:'Bananas', serving : 4 , calories : 360 , pic : 'https://media.istockphoto.com/photos/single-fresh-raw-clean-isolated-one-alone-horizontally-oriented-on-picture-id1266340637?b=1&k=20&m=1266340637&s=170667a&w=0&h=m215bqBaJETpZ5Tuyl2dhIdcfqpecCxBM7tXyAZzmn8=' }
  
  const egg1 = {name:'Boiled Egg' , serving : 1 , calories : 207 , pic:'https://www.seriouseats.com/thmb/GLnX8RfV3LgV9tAYA49uDozIC-I=/1500x1125/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__images__2014__04__20140430-peeling-eggs-10-cd5f3eda6734438dae846e11e04cb675.jpg' }
  const egg2= {name:'Boiled Eggs' , serving : 2 , calories : 414 , pic:'https://www.seriouseats.com/thmb/GLnX8RfV3LgV9tAYA49uDozIC-I=/1500x1125/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__images__2014__04__20140430-peeling-eggs-10-cd5f3eda6734438dae846e11e04cb675.jpg' }
  const egg3 = {name:'Boiled Eggs' , serving : 3 , calories : 632 , pic:'https://www.seriouseats.com/thmb/GLnX8RfV3LgV9tAYA49uDozIC-I=/1500x1125/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__images__2014__04__20140430-peeling-eggs-10-cd5f3eda6734438dae846e11e04cb675.jpg' }
  
  const ts = {name:'Turkey Sandwitch', serving : 1 , calories : 177 , pic :'https://static.toiimg.com/thumb/60480328.cms?width=300&height=300' }
  const ts2 = {name:'Turkey Sandwitch', serving : 2 , calories : 344 , pic :'https://static.toiimg.com/thumb/60480328.cms?width=300&height=300' }
  const ches = {name:'Cheese sticks', serving : '100 g' , calories : 329 , pic :'https://www.fastfoodcalories.com/wp-content/uploads/2019/01/Sonic-Mozzarella-Cheese-Sticks.jpg' }
  const sneaker = {name:'A Bar of Sneakers', serving : '44 g' , calories : 215  , pic :'https://upload.wikimedia.org/wikipedia/commons/9/97/Snickers-broken.png' }
  const sneaker2 = {name:'A Bar of Sneakers', serving : '85 g' , calories : 400  , pic :'https://upload.wikimedia.org/wikipedia/commons/9/97/Snickers-broken.png' }

  const [meal, setMeal] = useState('')
  const [cals, setCals] = useState(0)
  const [noOfMeals, setNoOfMeals] = useState(4)
  const [valError, setValError] = useState(null)
  const [generateShow, setGenerateShow] = useState(false)
  const [generatedMeal, setGeneratedMeal] = useState(null)
  const [totalCalServed, settotalCalServed] = useState(0)

  useEffect(() => {
    const mealExist = localStorage.getItem('Meal') ? 
    JSON.parse(localStorage.getItem('Meal'))
    : null

    setGeneratedMeal(mealExist)
    getTotalServed(mealExist)

  }, [ ])



  const getTotalServed = (x) =>{
    if(!x) return;

    let ans = 0
    if (x.morning.length > 0) {
      for (let i = 0; i < x.morning.length; i++) {
        ans = ans + x.morning[i].calories
      }
    }


    if (x.lunch.length > 0) {
      for (let i = 0; i < x.lunch.length; i++) {
        ans = ans + x.lunch[i].calories
      }
    }



    if (x.dinner.length > 0) {
      for (let i = 0; i < x.dinner.length; i++) {
        ans = ans + x.dinner[i].calories
      }
    }


    if (x.snack.length > 0) {
      for (let i = 0; i < x.snack.length; i++) {
        ans = ans + x.snack[i].calories
      }
    }

    settotalCalServed(ans);
    return ans ;

  }



  const generateHandler = () =>{
    if(meal == '') { setValError('Please Select a Meal') ; return ; }
    if(cals < 1) { setValError('Please Select a Valid Calorie Range') ; return ; }
    if(noOfMeals < 1) { setValError('Please Select a Valid Number of Meals Range') ; return ; }

    setValError(null)


    let x = {
      morning : [] ,

      lunch : [] , 

      dinner : [] ,

      snack : [],
    }

    let y = cals 

    if(meal == 'Vegan'){
      for (let i = 0; i < noOfMeals ; i++) {
        
        if(i==0) x.morning.push(om)
        if(i==1) x.lunch.push(gc)
        if(i==2) x.dinner.push(steak)
        if(i==3) x.snack.push(sneaker)
        
      }

      localStorage.setItem('Meal',JSON.stringify(x));
      setGeneratedMeal(x)
      var n = getTotalServed(x)
      console.log(n);

  
      if(n < cals  ){
        if (n < cals - 800) {x.lunch.push(sb2) ;x.lunch.push(egg3)}
        else if (n < cals - 700) {x.lunch.push(sb2) ;x.lunch.push(egg2)}
        else if (n < cals - 600) {x.lunch.push(sb2) ;x.lunch.push(egg1)}
        else if (n < cals - 500) {x.lunch.push(sb) ;x.lunch.push(egg2)}
        else if (n < cals - 400) {x.lunch.push(sb) ;x.lunch.push(egg1)}
        else if (n < cals - 300) x.lunch.push(egg3)
        else if (n < cals - 200) x.lunch.push(egg2) 
        else x.lunch.push(egg1) 

        localStorage.setItem('Meal',JSON.stringify(x));
        setGeneratedMeal(x)
        var n = getTotalServed(x)
        console.log(n);
      }

      if(n < cals){
        if (n < cals - 800) {x.morning.push(nb2) ; x.lunch.push(banana1) ; x.lunch.push(sneaker)  }
        else if (n < cals - 700) { x.morning.push(nb2) ; x.lunch.push(banana3) }
        else if (n < cals - 600) { x.morning.push(nb2) ; x.lunch.push(banana2) }
        else if (n < cals - 500) { x.morning.push(nb2) ; x.lunch.push(banana1) }
        else if (n < cals - 400) x.morning.push(banana3)
        else if (n < cals - 300) x.morning.push(banana3)
        else if (n < cals - 200) x.morning.push(banana2) 
        else x.lunch.push(banana1) 

        localStorage.setItem('Meal',JSON.stringify(x));
        setGeneratedMeal(x)
        var n = getTotalServed(x)
        console.log(n);

      }



    }


    
    if(meal == 'Anything' || meal == 'Paleo' || meal =='Meditarranian' || meal =='Ketogenic'  ){
      for (let i = 0; i < noOfMeals ; i++) {
        
        if(i==0) x.morning.push(ts2)
        if(i==1) x.lunch.push(ches)
        if(i==2) x.dinner.push(chili)
        if(i==3) x.snack.push(sneaker2)
        
      }

      localStorage.setItem('Meal',JSON.stringify(x));
      setGeneratedMeal(x)
      var n = getTotalServed(x)
      console.log(n);

  
      if(n < cals  ){
        if (n < cals - 800) {x.lunch.push(steak) ;x.lunch.push(egg3)}
        else if (n < cals - 700) {x.lunch.push(steak) ;x.lunch.push(egg2)}
        else if (n < cals - 600) {x.lunch.push(steak) ;x.lunch.push(egg1)}
        else if (n < cals - 500) {x.lunch.push(steak) ;x.lunch.push(egg2)}
        else if (n < cals - 400) {x.lunch.push(sb) ;x.lunch.push(egg1)}
        else if (n < cals - 300) x.lunch.push(egg3)
        else if (n < cals - 200) x.lunch.push(egg2) 
        else x.lunch.push(egg1) 

        localStorage.setItem('Meal',JSON.stringify(x));
        setGeneratedMeal(x)
        var n = getTotalServed(x)
        console.log(n);
      }

      if(n < cals){
        if (n < cals - 800) {x.morning.push(chicken) ; x.lunch.push(banana1) ; x.lunch.push(sneaker)  }
        else if (n < cals - 700) { x.morning.push(chicken) ; x.lunch.push(banana3) }
        else if (n < cals - 600) { x.morning.push(chicken) ; x.lunch.push(banana2) }
        else if (n < cals - 500) { x.morning.push(chicken) ; x.lunch.push(banana1) }
        else if (n < cals - 400) x.morning.push(banana3)
        else if (n < cals - 300) x.morning.push(banana3)
        else if (n < cals - 200) x.morning.push(banana2) 
        else x.lunch.push(banana1) 

        localStorage.setItem('Meal',JSON.stringify(x));
        setGeneratedMeal(x)
        var n = getTotalServed(x)
        console.log(n);

      }



      
    }





    if(meal == 'Vegetarian'  ){
      for (let i = 0; i < noOfMeals ; i++) {
        
        if(i==0) x.morning.push(nb)
        if(i==1) x.lunch.push(ches)
        if(i==2) x.dinner.push(chili)
        if(i==3) x.snack.push(as)
        
      }

      localStorage.setItem('Meal',JSON.stringify(x));
      setGeneratedMeal(x)
      var n = getTotalServed(x)
      console.log(n);

  
      if(n < cals  ){
        if (n < cals - 800) {x.lunch.push(sb2) ;x.lunch.push(egg3)}
        else if (n < cals - 700) {x.lunch.push(sb2) ;x.lunch.push(egg2)}
        else if (n < cals - 600) {x.lunch.push(sb2) ;x.lunch.push(egg1)}
        else if (n < cals - 500) {x.lunch.push(sb) ;x.lunch.push(egg2)}
        else if (n < cals - 400) {x.lunch.push(sb) ;x.lunch.push(egg1)}
        else if (n < cals - 300) x.lunch.push(egg3)
        else if (n < cals - 200) x.lunch.push(egg2) 
        else x.lunch.push(egg1) 

        localStorage.setItem('Meal',JSON.stringify(x));
        setGeneratedMeal(x)
        var n = getTotalServed(x)
        console.log(n);
      }

      if(n < cals){
        if (n < cals - 800) {x.morning.push(chicken) ; x.lunch.push(banana1) ; x.lunch.push(sneaker)  }
        else if (n < cals - 700) { x.morning.push(chicken) ; x.lunch.push(banana3) }
        else if (n < cals - 600) { x.morning.push(chicken) ; x.lunch.push(banana2) }
        else if (n < cals - 500) { x.morning.push(chicken) ; x.lunch.push(banana1) }
        else if (n < cals - 400) x.morning.push(banana3)
        else if (n < cals - 300) x.morning.push(banana3)
        else if (n < cals - 200) x.morning.push(banana2) 
        else x.lunch.push(banana1) 

        localStorage.setItem('Meal',JSON.stringify(x));
        setGeneratedMeal(x)
        var n = getTotalServed(x)
        console.log(n);

      }



      
    }

    




    

  }


  return (
    <div className="App">
      <Container>
      <br/><br/><br/>
      
      <DietForm cals={cals} setCals={setCals} meal={meal} setMeal={setMeal} valError={valError} setValError={setValError}  
        noOfMeals={noOfMeals} setNoOfMeals={setNoOfMeals} generateHandler={generateHandler}
      />




    <Container style={{textAlign:'center'}} >
      

      <br/><br/>

    

    {generatedMeal && <Container>
      {totalCalServed && <div> 
        <h2>Todays Meal Plan</h2>
        <p>Total Calories Served will be : {totalCalServed}</p> </div> }

      {generatedMeal.morning.length > 0 &&  <Paper elevation={6} style={{padding:'30px 20px', margin:'20px 10px' }} >
        <h1>Morning</h1>
        
        {generatedMeal.morning.map(x=><div style={{textAlign:'left'}} >
          <Grid container>
          <Grid item sm={2}>
          <img style={{width:'150px',height:'150px'}} src={x.pic} />
          </Grid>

          <Grid item sm={10}  >
          <p><b>{x.name}</b></p>
          <p>Serving : {x.serving}</p>
          <p>Calories : {x.calories}</p>
          </Grid>

          </Grid>
        <hr/>
        </div>)}

        </Paper> }


        {generatedMeal.lunch.length > 0 &&  <Paper elevation={6} style={{padding:'30px 20px', margin:'20px 10px' }} >
        <h1>Lunch</h1>
        
        {generatedMeal.lunch.map(x=><div style={{textAlign:'left'}} >
          <Grid container>
          <Grid item sm={2}>
          <img style={{width:'150px',height:'150px'}} src={x.pic} />
          </Grid>

          <Grid item sm={10}  >
          <p><b>{x.name}</b></p>
          <p>Serving : {x.serving}</p>
          <p>Calories : {x.calories}</p>
          </Grid>

          </Grid>
        <hr/>
        </div>)}

        </Paper> }

        {generatedMeal.dinner.length > 0 &&  <Paper elevation={6} style={{padding:'30px 20px', margin:'20px 10px' }} >
        <h1>Dinner</h1>
        
        {generatedMeal.dinner.map(x=><div style={{textAlign:'left'}} >
          <Grid container>
          <Grid item sm={2}>
          <img style={{width:'150px',height:'150px'}} src={x.pic} />
          </Grid>

          <Grid item sm={10}  >
          <p><b>{x.name}</b></p>
          <p>Serving : {x.serving}</p>
          <p>Calories : {x.calories}</p>
          </Grid>

          </Grid>
        <hr/>
        </div>)}

        </Paper> }


        {generatedMeal.snack.length > 0 &&  <Paper elevation={6} style={{padding:'30px 20px', margin:'20px 10px' }} >
        <h1>Snack</h1>
        
        {generatedMeal.snack.map(x=><div style={{textAlign:'left'}} >
          <Grid container>
          <Grid item sm={2}>
          <img style={{width:'150px',height:'150px'}} src={x.pic} />
          </Grid>

          <Grid item sm={10}  >
          <p><b>{x.name}</b></p>
          <p>Serving : {x.serving}</p>
          <p>Calories : {x.calories}</p>
          </Grid>

          </Grid>
        <hr/>
        </div>)}

        </Paper> }




        
    </Container>  }


    </Container>
     


      </Container>
    </div>
  );
}

export default App;