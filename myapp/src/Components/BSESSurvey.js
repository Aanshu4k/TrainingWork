import { useState, useEffect, useRef } from 'react';
const BSESSurvey = () => {
    const [formData, setFormData] = useState({
        name: '', age: '', contact_det: '',
    }, [])
    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current.focus();
    }, [])
    const [rating, setRating] = useState({
        powerRel: 0,
        custSupp: 0,
        billAcc: 0,
        onlServ: 0,
        outResTime: 0,
    })
    const [validation, setValidation] = useState({
        name: { isValid: true, errorMessage: '' },
        age: { isValid: true, errorMessage: '' },
        contact_det: { isValid: true, errorMessage: '' }
    })
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
        validateInput(name,value)

    }
    const handleInputChange2 = (e) => {
        const { name, value } = e.target;
        setRating({ ...rating, [name]: value })
    }
    const validateInput = (fieldName, value) => {
        let isValid=true;
        let errorMessage='';
        switch(fieldName){
            case 'name':
                const nameRegex=/^[A-Za-z\s]{2,}$/;
                isValid=nameRegex.test(value);
                errorMessage=isValid?'':'Invalid Name';
                break;
            case 'age':
                const ageRegex=/^\d+$/;
                isValid=ageRegex.test(value);
                errorMessage=isValid?'':'Invalid Age';
                break;
            default:
                break;
        }
        setValidation((prevValidation) => (
            {
                ...prevValidation,
                [fieldName]: { isValid, errorMessage }
            }
        ));
    }
    const calculateAvg = (e) => {
        // e.preventDefault();
        let result;
        result = (parseFloat(rating.powerRel) + parseFloat(rating.custSupp) + parseFloat(rating.billAcc) + parseFloat(rating.onlServ) + parseFloat(rating.outResTime)) / 5;
        alert(`Thank you for filling the Survey ${formData.name}. Average Rating= ${result}`)
    }
    return (
        <div style={{ padding: '10px' }}>
            <h2>BSES SURVEY FORM</h2>
            <form style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap' }}>
                <div>
                    <label>Name: </label>
                    <input ref={inputRef} type='text' name='name' value={formData.name} onChange={handleInputChange} 
                    style={{borderColor: validation.name.isValid?'green':'red'}}
                    />{" "}
                    {validation.name.isValid?null:
                    <span style={{color:'red'}}>{validation.name.errorMessage}</span>}
                    <br /><br />
                    <label>Age: </label>
                    <input type='number' name='age' value={formData.age} onChange={handleInputChange} 
                    style={{borderColor: validation.age.isValid?'green':'red'}}
                    />
                    {validation.age.isValid?null:
                    <span style={{color:'red'}}>{validation.age.errorMessage}</span>}
                    <br /><br />
                    <label>Contact Details: </label>
                    <input type='number' name='contact_det' value={formData.contact_det} onChange={handleInputChange} />
                    {" "}<br /><br />
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
                </div><br />
                <button type='submit' onClick={calculateAvg}>SUBMIT</button>
            </form>

        </div>
    )
}
export default BSESSurvey;