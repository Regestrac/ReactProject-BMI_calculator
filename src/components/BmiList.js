import './bmiList.css'
function BmiList({range,bmi}) {
  return (
    <div>
      <div className="table-box">
        <table className="table text-center text-white table-bordered bg-dark">
          <thead>
            <tr>
              <th scope="col">Type</th>
              <th scope="col">BMI</th>
              <th scope="col">Weight</th>
            </tr>
          </thead>
          <tbody>
            <tr className={bmi<18.5 ? "border-primary border-3":""}>
              <td>Underweight</td>
              <td>&lt; 18.5</td>
              <td>&lt; {range.underWeight.low} KG</td>

            </tr>
            <tr className={bmi>=18.5 && bmi<25 ? "border-success border-3":""}>
              <td>Normal</td>
              <td>18.5 - 24.99</td>
              <td>{range.normal.low} KG - {range.normal.high} KG</td>

            </tr>
            <tr className={bmi>=25 && bmi<30 ? "border-danger border-3":""}>
              <td>Overweight</td>
              <td>25 - 29.99</td>
              <td>{range.overWeight.low} KG - {range.overWeight.high} KG</td>
            </tr>
            <tr className={bmi>=30 && bmi<35 ? "border-warning border-3":""}>
              <td>Obesity class I</td>
              <td>30 - 34.99</td>
              <td>{range.obesityOne.low} KG - {range.obesityOne.high} KG</td>
            </tr>
            <tr className={bmi>=35 && bmi<40 ? "border-info border-3":""}>
              <td>Obesity class II</td>
              <td>35 - 39.99</td>
              <td>{range.obesityTwo.low} KG - {range.obesityTwo.high} KG</td>
            </tr>
            <tr  className={bmi>=40 ? "border-danger border-3":""}>
              <td>Obesity class III</td>
              <td>&gt;= 40</td>
              <td>&gt; {range.obesityThree.high} KG</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default BmiList