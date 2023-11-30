import { useState, useEffect } from 'react';
const BSESSurvey = () => {
    const [formData, setFormData] = useState({
        name: '', age: '', contact_det: '',
    }, [])
    const [rating, setRating] = useState({
        powerRel: 0,
        custSupp: 0,
        billAcc: 0,
        onlServ: 0,
        outResTime: 0,
    })
    const handleInputChange = (e) => {
        // const {name,value}=e.target;
        // setFormData({...rating,[name]:value})
        setFormData(e.target.value);
        console.log(formData);
    }
    const handleInputChange2 = (e) => {
        const { name, value } = e.target;
        setRating({ ...rating, [name]: value })
        console.log(rating)
    }
    const calculateAvg=()=>{
        let result=0;
        result=(rating.powerRel+rating.custSupp+rating.billAcc+rating.onlServ+rating.outResTime)/5;
        alert()
    }
    return (
        <div style={{ padding: '10px' }}>
            <h2>BSES SURVEY FORM</h2>
            <form style={{display:'flex',flexDirection:'column'}}>
                <div>
                    <label>Name: </label>
                    <input type='text' value={formData.name} onChange={handleInputChange} /><br />
                    <label>Age: </label>
                    <input type='number' value={formData.age} onChange={handleInputChange} /><br/>
                    <label>Contact Details: </label>
                    <input type='number' value={formData.contact_det} onChange={handleInputChange} />
                    {" "}
                </div>

                <div>
                    <h4>Rate Our Services</h4><br />
                    <label>Power Relability</label>
                    <input type='number' name='powerRel' value={rating.powerRel} onChange={handleInputChange2} /><br />
                    <label>Customer Support</label>
                    <input type='number' name='custSupp' value={rating.custSupp} onChange={handleInputChange2} /><br />
                    <label>Billing Accuracy</label>
                    <input type='number' name='billAcc' value={rating.billAcc} onChange={handleInputChange2} /><br />
                    <label>Online Services(e.g.,websites/app usablity)</label>
                    <input type='number' name='onlServ' value={rating.onlServ} onChange={handleInputChange2} /><br />
                    <label>Outage Response Time</label>
                    <input type='number' name='outResTime' value={rating.outResTime} onChange={handleInputChange2} /><br />
                </div><br/>
                <button type='submit' >SUBMIT</button>
            </form>

        </div>
    )
}
export default BSESSurvey;