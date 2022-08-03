import './bmiScore.css'
function BmiScore({bmiNo, bmiName, changeWeight}) {
  return (
    <div className="bmi-score">
      <h3 className="bmi-heading">Your BMI Score</h3>
      <div className="bmi">
        <div className="bmi-value">{bmiNo}</div>
        <div className="bmi-type">{bmiName}</div>
        {changeWeight.type==="positive" && (<div>You need to lose <b>{changeWeight.weight} KG</b></div>)}
        {changeWeight.type==="negative" && (<div>You need to gain <b>{changeWeight.weight} KG</b></div>)}
        {changeWeight.type==="normal" && (<div>congratulations! You have Normal weight.</div>)}
      </div>
    </div>
  )
}

export default BmiScore