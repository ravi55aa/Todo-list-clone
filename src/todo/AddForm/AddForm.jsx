import React from "react";
import "./AddForm.css";
import QuoteForm from "./quoteForm/QuoteForm";


const AddForm = ({addQuote}) => {
  return (
    <div className="w-25 px-4 h-75 bg-warning border-1 border-solid border-danger rounded-3">
        <h2 className="text-center mb-4 text-decoration-underline">Add Quote</h2>

        < QuoteForm addQuote={addQuote} />
    </div>
  );
};

export default AddForm;
