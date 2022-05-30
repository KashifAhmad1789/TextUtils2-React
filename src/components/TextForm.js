import React, {useState} from 'react'
  /// memrize or got ot react hooks
export default function TextForm(props) {
    const [text, setText] = useState('Enter text here')
    const handleUpClick = ()=>{
       // console.log("uppercase was clicked" + text)
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase!", "Sucess");
    }
    const handleDownClick = ()=>{
       // console.log("uppercase was clicked" + text)
        let newText = text.toLowerCase();
        setText(newText)
         props.showAlert("Converted to Lowercase!", "Sucess");
    }
    const cleartext = () => {
       // console.log("uppercase was clicked" + text)
        let newText = ""
        setText(newText)
    }
    
    // for typing onchange function is very necessary
    const handleUpChange = (event)=>{
        console.log("handleUpChange was clicked")
        setText(event.target.value)
    }
    const handlecopy = () =>{
      var text = document.getElementById("myBox")
      text.select();
      navigator.clipboard.writeText(text.value)
    }
  return (
      <>
    <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3"> 
           
            <textarea className="form-control" value={text} onChange={handleUpChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert To Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleDownClick}>Convert To LowerCase</button>
            <button className="btn btn-primary mx-1" onClick={cleartext}>Clear Text</button>
            <button className="btn btn-primary mx-1" onClick={handlecopy}>Copy Text</button>
            

            
    </div>
    <div className="container">
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} character</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>


    </div>
    </>
  )
}
