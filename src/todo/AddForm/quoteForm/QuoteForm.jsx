import React,{useState,useRef} from 'react';
import "./QuoteForm.css";

// if something is important enough , you'll do it even if the odds are against you

const QuoteForm = ({addQuote}) => {
    let [formdata,setFormData] = useState({name:"",body:"",isEdit:false});
    const makeInputFieldValueAsNull = useRef([]);

    const handleFields=(e)=>{
        setFormData((prevData)=>({...prevData,[e.target.name]:e.target.value}))
        return;
    }

    //handle submit:
    const handleSubmit=(event)=>{
        event.preventDefault();

        const {name,body} = formdata;
        if(name.trim() == "" || body.trim() == ""){
            alert("cannot submit the empty field");
            return;
        }

        //i got this addQuote function via prop-drilling
        //so calling this function from here
        //and passing the data inside of it.
        addQuote(formdata);

        setFormData({name:"",body:""});
        makeInputFieldValueAsNull.current[0].value = "";
        makeInputFieldValueAsNull.current[1].value = "";
        return;
    }

  return (
    <form onSubmit={(e)=>{handleSubmit(e)}} className='form'>
        <div className="mb-2">
            <label htmlFor="name" className="form-label">Name</label>
            <input ref={(el)=>{(makeInputFieldValueAsNull.current[0] = el)}} 
            name="name" placeholder='Author Name' onChange={(e)=>{handleFields(e)}} type="text" id='name' className="form-control" />
        </div>
        <div className="mb-2 ">
            <label htmlFor="body" className="form-label">Name</label>
            <textarea ref={(el)=>{(makeInputFieldValueAsNull.current[1] = el)}} 
            name="body" placeholder='Enter the quote' onChange={(e)=>{handleFields(e)}} id="body" className='form-control' cols="10" rows="10" ></textarea>
        </div>
        
        <button type='submit' className='btn btn-secondary'>Submit</button>
    </form>
  )
}

export default QuoteForm