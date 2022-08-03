import './bmiScore.css'
function BmiScore({bmiNo, bmiName, changeWeight}) {
  console.log(changeWeight);
  return (
    <div className="bmi-score">
      <h3 className="bmi-heading">Your BMI Score</h3>
      <div className="bmi">
        <div className="bmi-value">{bmiNo}</div>
        <div className="bmi-type">{bmiName}</div>
        {/* <div className="bmi-msg">You need to lose <span><b>"10.00 KG"</b></span></div> */}
      </div>
    </div>
  )
}

export default BmiScore