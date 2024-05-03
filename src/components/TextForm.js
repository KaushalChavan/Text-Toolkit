import React, { useState } from 'react'

export default function TextForm(props) {

  
  const upClick = () =>{
    console.log("btn was clicked");
    let newText = text.toUpperCase();
    setText(newText)
    let textAlert = document.getElementById("myBox");
    navigator.clipboard.writeText(textAlert.value)
    if(textAlert.value===""){
      props.showAlert("Please write something in the textbox", "danger")
    }
    else{
      props.showAlert("Converted to uppercase", "success")
    }
  }  

  const lowClick = () =>{
    console.log("btn was clicked");
    let newText = text.toLowerCase();
    setText(newText);
    let textAlert = document.getElementById("myBox");
    navigator.clipboard.writeText(textAlert.value)
    if(textAlert.value===""){
      props.showAlert("Please write something in the textbox", "danger")
    }
    else{
    props.showAlert("Converted to lowercase", "success")
    }
  }  
  
  const clearClick = () =>{
    console.log("btn was clicked");
    let newText = "";
    setText(newText);
    let textAlert = document.getElementById("myBox");
    navigator.clipboard.writeText(textAlert.value)
    if(textAlert.value===""){
      props.showAlert("Please write something in the textbox", "danger")
    }
    else{
    props.showAlert("Text Cleared", "success")
  }  
}

  const copyClick = () =>{
    console.log("btn was clicked");
    let newText = document.getElementById("myBox");
    newText.select();
    navigator.clipboard.writeText(newText.value)
    document.getSelection().removeAllRanges();
    if(newText.value===""){
      props.showAlert("Please write something in the textbox", "danger")
    }
    else{
      props.showAlert("Copied to clipboard", "success")
    }
  }  

  const extraSpaces = () =>{
    console.log("btn was clicked");
    let newText = text.split(/[  ]+/);
    setText(newText.join(" "));
  }  
  
  const handleOnChange = (event) =>{
    console.log("On Change");
    setText(event.target.value);
  }  

  const [text, setText] = useState("");
    
  return (
    <>
    <div className='container my-5' style={{color: props.mode==='light'?'black':'white'}} >
      <h3>{props.heading}</h3>
      <div className="mb-3 my-4">
      <textarea className="form-control border border-2" style={{background: props.mode==='light'?'white':'#212529',color: props.mode==='light'?'black':'white'}} value={text} onChange={handleOnChange} id='myBox' rows="6">
      </textarea>
      </div>
      <button className='btn btn-primary' onClick={upClick}>Convert To Uppercase</button>
      <button className='btn btn-primary mx-2 my-2' onClick={lowClick}>Convert To Lowercase</button>
      <button className='btn btn-primary mx-2 my-2' onClick={clearClick}>Clear</button>
      <button className='btn btn-primary mx-2 my-2' onClick={copyClick}>Copy</button>
      <button className='btn btn-primary mx-2 my-2' onClick={extraSpaces}>Remove Extra Spaces</button>
    </div>

    <div className="container my-3" style={{color: props.mode==='light'?'black':'white'}}>
       <h3>Your Text Summary :</h3>
       <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
       <p>{0.08 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
       <br />
       <h3>Preview :</h3>
       <p>{text.length>0?text:"Nothing to preview!"}</p>
    </div>
    </>
  )
}
