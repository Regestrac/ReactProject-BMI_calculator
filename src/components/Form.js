import React,{ useState } from "react";
import './form.css';
function Form({getData}) { //passing the details as props
    let [Weight, setWeight] = useState(""); 
    let [Height, setHeight] = useState("");
    const [Alert, setAlert] = useState(false);
    const [selectHeight, setSelectHeight] = useState("cm");
    const [selectWeight, setSelectWeight] = useState("kg")
    const changeHeightOption = (e)=>{
        setSelectHeight(e.target.value)
    }
    const changeWeightOption=(e)=>{
        setSelectWeight(e.target.value)
    }
    const onSubmit =(e)=>{
        e.preventDefault();
        if(isNaN(Weight) || isNaN(Height)){ //checks wheather the input value is number
            setAlert(true)
        }else{
            if(selectHeight === "cm"){
                Height=(Height/100); 
            }else if(selectHeight==="m"){
                Height=Height*1;
            }else if(selectHeight==="ft"){
                Height=(Height/3.28);
            }else if(selectHeight==="in"){
                Height=(Height/39.37);
            }
            if(selectWeight==="kg"){
                Weight=Weight*1
            }else if(selectWeight==="lb"){
                Weight=(Weight/2.205)
            }
            getData(Weight,Height);
            setAlert(false)
        }
    };
    return (
        <div className="formdiv">
            <div className="col-10 col-sm-8 col-md-6 col-lg-5 col-xl-4 px-4 forms">
                <h1 className="text-center pt-2 mb-4 text-secondary h2">BMI Calculator</h1>
                <form onSubmit={onSubmit} className="">
                    <div className="row">
                        <div className="col-6">
                            <div className="mb-3">
                                <label className="form-label" for="weight">Weight:</label>
                                <select className="options" id="weight" name="weight" onChange={changeWeightOption}>
                                    <option className="option" value="kg">Kilograms(Kg)</option>
                                    <option className="option" value="lb">Pounds(lb)</option>
                                </select>
                                <input type="text" className="form-control inp" value={Weight} onChange={(e)=>setWeight(e.target.value)} required/>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="mb-3">
                                <label className="form-label" for="height">Height:</label>
                                <select className="options" id="height" name="height" onChange={changeHeightOption}>
                                    <option className="option" value="cm">Centimeter(cm)</option>
                                    <option className="option" value="m">meter(m)</option>
                                    <option className="option" value="ft">Feet(Ft)</option>
                                    <option className="option" value="in">Inches(In)</option>
                                </select>
                                <input type="text" className="form-control inp" value={Height} onChange={(e)=>setHeight(e.target.value)} required/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 text-center mb-3 mt-2">
                                <button type="submit" className="btn button px-5">Get BMI</button>
                            </div>
                        </div>
                    </div>
                </form>
                {Alert && <div className="alert alert-danger">Please Enter Valid datas</div>}
            </div>
        </div>
    )
}

export default Form