import React from 'react';
import {Routes , Route} from "react-router-dom"
import Main from './Main';
import Test from './Test';
import TimeOut from './TimeOut';
import Result from './Result';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Main />} />
        <Route path="/test" element={<Test />} />
        <Route path="/timeout" element={<TimeOut />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </>
  );
}
