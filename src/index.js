import './index.css';
import { AuthProvider } from '@descope/react-sdk';
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import App from './App';
export { default as Landing } from "./Landing";
export { default as Login } from "./Login";
export { default as Register } from "./Register";
export { default as Home } from "./Home";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <AuthProvider
            projectId='P2Vq6X2n5q0wyAwgN0QhKoo1E2vN'
        >
            <App />
        </AuthProvider>
    </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
