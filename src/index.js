import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";
import 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDeAQR22ANbHFcWBm2O3wpP27hql250PVo",
  authDomain: "reactcart-471bf.firebaseapp.com",
  projectId: "reactcart-471bf",
  storageBucket: "reactcart-471bf.appspot.com",
  messagingSenderId: "7331361314",
  appId: "1:7331361314:web:b8d5cf1f23970e141b507b"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

