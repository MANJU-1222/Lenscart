import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./component/res.css"
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import Over from './component/Overall';
import Zoom from './component/Zoom';
import Type1 from './component/Type1';
import './component/style5.css'
import Type from './component/Type';
import Typesun from './component/Typesun';
import Totaltype2 from './component/Totaltype2';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <App /> */}
     <BrowserRouter>
          <Over/>
     </BrowserRouter>
   
     
  </>
);

reportWebVitals();
