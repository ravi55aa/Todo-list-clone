import React from 'react';
import "./QuotesItem.css";
import EditItem from './EditItem';


const QuotesItem = ({handleCancel,save,edit,removeQuote,quotes}) => {

  return (
    <>{quotes &&
        quotes.map((ele,i)=>{
            return(
                ele.isEdit==true ? (
                    <div key={i} >
                        <EditItem handleCancel={handleCancel} save={save} ele={ele} i={i} />
                    </div>
                ) : (
                    <section key={i} className='px-2 py-1 border border-3 border-secondary rounded-3 text-white mb-2'>
                    <h4 className='mb-1 fw-bolder text-secondary'>{ele.name}</h4>
                    <div className='w-100 d-flex justify-content-between'>
                        <p className='w-75 overflow-x-auto capitalize'>{ele.body}</p>
                        <div>
                        <button onClick={()=>{edit(i)}} className="btn btn-primary me-2">Edit</button>
                        <button onClick={()=>{removeQuote(i)}} className='btn btn-danger'>X</button>
                        </div>
                    </div>
                    </section>
                ))
        })
    }</>
  )
}

export default QuotesItem;
