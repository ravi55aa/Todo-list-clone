import React,{useState} from 'react'

const EditItem = ({handleCancel,save,ele,i}) => {
    let data = {name:ele.name,body:ele.body,isEdit:ele.isEdit};
    let [edit,setEdit] =  useState(data);

    const handleChanges=(e)=>{
        setEdit((prevData)=>({...prevData,[e.target.name]:e.target.value}));
        return;
    }



  return (
        <form  className='form'>
        <div className="mb-2">
            <label htmlFor="name" className="form-label">Name</label>
            <input  
            name="name" value={edit.name} onChange={(e)=>handleChanges(e)} placeholder='Author Name'  type="text" id='name' className="form-control" />
        </div>
        <div className="mb-2 ">
            <label htmlFor="body" className="form-label">Name</label>
            <textarea  
            name="body" value={edit.body} onChange={(e)=>handleChanges(e)} placeholder='Enter the quote'  id="body" className='form-control' cols="3" rows="3" ></textarea>
        </div>

        <div className='d-flex '>
            <button type='button' onClick={()=>save(i,edit)} className='btn btn-success me-4'>Save</button>
            <button type='button' onClick={()=>handleCancel(i)} className='btn btn-danger'>cancel</button>
        </div>
        </form>
  )
}

export default EditItem;



