import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React,{useState,Suspense,lazy, useCallback} from "react";
const AddForm = lazy(()=>import("./todo/AddForm/AddForm"));
const QuoetList = lazy(()=>import("./todo/QuoetList/QuoetList"));

function App() {
  const [quotes,setQuotes]=useState([]);
  
  // 
  const addQuote=useCallback((quote)=>{
    setQuotes((prevData)=>[...prevData,quote]);
    return;
  },[quotes]);

  //
  const edit=(index)=>{
    let editableElement = quotes.map((ele,i)=>{
        if(i == index){
            return {...ele, isEdit: true};
        } else {
          return ele
        }
    });
    setQuotes(editableElement);

    return;
}


 const save=(index,newData)=>{
  console.log(index,newData);
    let editedData = quotes.map((ele,i)=>{
        if(i == index) { 
          return {...newData,isEdit:false};
        } else  {
          return ele;
        }
    });

    setQuotes(editedData);
    return;
 }

 const handleCancel=(index)=>{
  let cancelEdit = quotes.map((ele,i)=>{
    if(i == index){
      return {...ele,isEdit:false};
    } else{
      return ele;
    }
  })

  setQuotes(cancelEdit);
  return;
 }

  //
  const removeQuote=(id)=>{
    let remainingQuote = quotes.filter((ele,i)=>i !== id);
    setQuotes(remainingQuote);
    return;
  }

  return (
    <div className="appContainer d-flex justify-content-center gap-5 align-items-center bg-success">
      <Suspense fallback={<h2 className="text-xl">Loading...</h2>}>
        <QuoetList handleCancel={handleCancel} save={save} edit={edit} removeQuote={removeQuote} quotes={quotes} />
        <AddForm addQuote={addQuote} />
      </Suspense>
    </div>
  );
}

export default App;

