import { useState } from "react";
import './form.css';
function Form() {
    const [Weight, setWeight] = useState("");
    const [Height, setHeight] = useState("");
    const [Alert, setAlert] = useState(false)
    const onSubmit =(e)=>{
        e.preventDefault();
        if(isNaN(Weight) || isNaN(Height)){
            setAlert(true)
        }else{
            setAlert(false)
            console.log(Weight);
            console.log(Height);
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
                                <label className="form-label">Weight(KG):</label>
                                <input type="text" className="form-control inp" value={Weight} onChange={(e)=>setWeight(e.target.value)} required/>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="mb-3">
                                <label className="form-label">Heigh(m):</label>
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