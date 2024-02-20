import React from 'react';
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from './Header';
import Home from './Home';



export default function main() {
 
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </>
  );
}
