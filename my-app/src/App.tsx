import React, { useState } from 'react';
// import './App.css';
import { Input, listaTassoIntaresse, variazioneMutuo } from './model';
import DateTimeList from './dateTimeEx';
import { couldStartTrivia } from 'typescript';
import Lucca from './ttable';
import { ValidationSchemaExample } from './testyup';
import { WithMaterialUI } from './mui';

function App() {
  // const [result, setResult] = useState<boolean>(false);
  // const [resultE, setResultE] = useState<string | null>(null);
  const [capitale, setCapitale] = useState<string>("");
  const [dataPrimaRata, setDataPrimaRata] = useState<string>('');
  const [durataMesi, setDurataMesi] = useState<string>("");
  const [tassoIniziale, setTassoIniziale] = useState<string>("");
  const [listLti, setListLti] = useState<listaTassoIntaresse>([]);
  const [listVm, setListVm] = useState<variazioneMutuo>([]);


  const clac = () => {


    // if (list.length > 2) {
    //   // calculate result
    //   setResult(true);
    //   setResultE(null);

    //   // console.log("numer mesi " + list[0].data.)

    //   console.log("numer mesi " + list[0].data.getUTCMonth())
    // } else {
    //   setResultE("no enought")
    // }
  }
  return (
    <div>


      <WithMaterialUI/>
    </div>
  );
}

export default App;
