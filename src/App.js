import BmiList from './components/BmiList';
import BmiScore from './components/BmiScore';
import Form from './components/Form';
import './app.css'
import { useState } from 'react';
function App() {
  const [Bmi, setBmi] = useState("00.00"); 
  const [BmiType, setBmiType] = useState("Category");
  const onFormSub=(w,h)=>{
    let bmi = calBmi(w,h); //gets valve of bmi after calculation
    setBmi(bmi);
    setBmiType(weightType(bmi)); //gets type after checking conditions
  }
  const calBmi=(w,h)=> (w/(h*h)).toFixed(2); //calculates bmi
  const weightType=(bmi)=>{     //checks condition to find type
    if(bmi<18.5){           
      return "Underweight"
    }else if(bmi>=18.5 && bmi <25){
      return "Normal"
    }else if(bmi>=25 && bmi <30){
      return "Overweight"
    }else if(bmi>=30 && bmi <35){
      return "Obesity Class I"
    }else if(bmi>=35 && bmi <40){
      return "Obesity Class II"
    }else if(bmi>=40){
      return "Obesity Class III"
    }
  }
  return (
    <div>
      <Form getData ={onFormSub}/>
      <div className='col-12 col-md-6'>
      <BmiScore bmiNo={Bmi} bmiName={BmiType}/>
      </div>
      <div className='col-12 col-md-6'>
      <BmiList/>
      </div>
    </div>
  );
};

export default App;
