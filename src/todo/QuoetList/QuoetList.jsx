import React from 'react'
import "./Quotelist.css";
import QuotesItem from './QuotesItems/QuotesItem';

const QuoetList = ({handleCancel,save,edit,removeQuote,quotes}) => {
  return (
    <div className='w-50 px-4 h-75 bg-dark overflow-y-auto border-1 border-solid border-danger rounded-3 text-white'>
        <h2 className='text-decoration-underline mb-5'>Quotes List</h2>

        <QuotesItem handleCancel={handleCancel} save={save} edit={edit} removeQuote={removeQuote}  quotes={quotes} />
    </div>
  )
}

export default QuoetList