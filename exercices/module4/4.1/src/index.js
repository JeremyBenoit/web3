import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./components/App/App";
import axios from 'axios'

axios.get('http://localhost:3001/persons').then(response => {
    const persons = response.data
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
            <App data={persons}/>
        </React.StrictMode>
    )
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
