import BmiList from './components/BmiList';
import BmiScore from './components/BmiScore';
import Form from './components/Form';
import './app.css'
import { useState } from 'react';
function App() {
  const [Bmi, setBmi] = useState("00.00");
  const [BmiType, setBmiType] = useState("Category");
  const [ChangeWeight, setChangeWeight] = useState({ weight: "", type: "" });
  const [Show, setShow] = useState(false);
  const [BmiRange, setBmiRange] = useState({
    underWeight: { low: ("") },
    normal: { low: "", high: "" },
    overWeight: { low: "", high: "" },
    obesityOne: { low: "", high: "" },
    obesityTwo: { low: "", high: "" },
    obesityThree: { high: "" },
  })
  const onFormSub = (w, h) => {
    let bmi = calBmi(w, h); //gets valve of bmi after calculation
    setBmi(bmi);
    setBmiType(weightType(bmi)); //gets type after checking conditions
    const range = {
      underWeight: { low: calWeight(18.499, h) },
      normal: { low: calWeight(18.5, h), high: calWeight(24.999, h) },
      overWeight: { low: calWeight(25, h), high: calWeight(29.999, h) },
      obesityOne: { low: calWeight(30, h), high: calWeight(34.999, h) },
      obesityTwo: { low: calWeight(35, h), high: calWeight(39.999, h) },
      obesityThree: { high: calWeight(40, h) },
    }
    setBmiRange(range);
    setChangeWeight(weightChange(bmi, w, range));
    setShow(true);
  }

  const calBmi = (w, h) => (w / (h * h)).toFixed(2); //calculates bmi
  const calWeight = (bmi, h) => (bmi * h * h).toFixed(2) //calculates weight
  const weightChange = (bmi, w, range) => {
    let changeObj;
    if (bmi < 18.5) {
      changeObj = { weight: (range.normal.low - w).toFixed(2), type: "negative" };
      return changeObj;
    } else if (bmi >= 25) {
      changeObj = { weight: (w - range.normal.high).toFixed(2), type: "positive" };
      return changeObj;
    } else {
      changeObj = { weight: 0, type: "normal" };
      return changeObj;
    }
  }
  const weightType = (bmi) => {     //checks condition to find type
    if (bmi < 18.5) {
      return "Underweight"
    } else if (bmi >= 18.5 && bmi < 25) {
      return "Normal"
    } else if (bmi >= 25 && bmi < 30) {
      return "Overweight"
    } else if (bmi >= 30 && bmi < 35) {
      return "Obesity Class I"
    } else if (bmi >= 35 && bmi < 40) {
      return "Obesity Class II"
    } else if (bmi >= 40) {
      return "Obesity Class III"
    }
  }
  return (
    <div>
      <Form getData={onFormSub} />
      <div className='results'>
      {Show && (
        <div className='bmi-data'>
          <div className='col-12 col-md-6'>
            <BmiScore bmiNo={Bmi} bmiName={BmiType} changeWeight={ChangeWeight} />
          </div>
          <div className='col-12 col-md-6'>
            <BmiList range={BmiRange} bmi={Bmi} />
          </div>
        </div>
      )}
      </div>
    </div>
    );
};

export default App;
