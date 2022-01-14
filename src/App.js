import React from "react";
import "./style.css";
import Pending from './Pending';
import Ongoing from './Ongoing';
import Done from './Done';

export default function App() {

  return (
    <div style={{display: 'flex'}}>
      <Pending />
      <Ongoing />
      <Done />
    </div>
  );
}
