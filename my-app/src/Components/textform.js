import React,{useState} from 'react'

export default function Textform(props) {
    const [text,setText]=useState(" ");
    const handleOnChange=(event)=>{
        setText(event.target.value)
    }
   
    const handleOnClick=()=>{
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleOnClick2=()=>{
        let newText=text.toLowerCase();
        setText(newText);
    }
    const handleOnClear=()=>{
      let newText='';
      setText(newText);
    }
    const handleCopy=()=>{
      console.log("I am a Copy!");
      var text=document.getElementById("myBox");
      text.select();
      text.setSelectionRange(0,9999);
      navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpaces=()=>{
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "))
    }
  return (
    <>
    <div className='container'  style={{color: props.mode==='dark'?'white':'black'}}>
        <h2 className='mx-5'>{props.heading}</h2>
<div className="mb-3 mx-5"> 
  <textarea class="form-control"  value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'rgb(31 54 78)':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
</div>
<button type="button" onClick={handleOnClick} className="btn btn-primary mx-5~">Convert to Uppercase</button>
<button type="button" onClick={handleOnClick2} className="btn btn-primary mx-1">Convert to Lowercase</button>
<button type="button" onClick={handleOnClear} className="btn btn-primary mx-1">Clear Text</button>
<button type="button" onClick={handleCopy} className="btn btn-primary mx-1">Copy Text</button>
<button type="button" onClick={handleExtraSpaces} className="btn btn-primary mx-1">Remove Extra space</button>
    </div>
  <div className='container my-3' style={{color:props.mode==='dark'?'white':'black'}}>
    <h2>Your Text Summary</h2>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length}Minutes read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something to preview"} </p>
  </div>
  </>
  )
}
