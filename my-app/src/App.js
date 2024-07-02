
import './App.css';
import Navbar from './Components/navbar';
import Textform from './Components/textform';
import Alert from './Components/alert';

import React,{useState} from 'react';
// import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
     msg:message,
     type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='rgb(31 54 78)';
      showAlert("Dark mode has been enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enaabled","success")
    }
  }
  return (
   <>
  
   <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
   <Alert Alert={alert}/>
   <div className="container my-3">
   {/* <Router> */}
   {/* <Link to='/about'></Link>
   <Link to='/home'></Link> */}
   {/* <Switch> */}
         
          {/* <Route exact path='/home'> */}
   <Textform heading="Enter the text to analyse below" mode={mode} toggleMode={toggleMode} />
  {/* </Route> */}
  {/* <Route exact path="/about">
            <About/>
          </Route> */}
{/* </Switch> */}
        {/* </Router> */}
        </div>
   </>
  );
}

export default App;
