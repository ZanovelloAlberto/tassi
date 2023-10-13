import React from 'react';
import { variazioneMutuo, listaTassoIntaresse, ResultTable } from './model';

const Table: React.FC<{ p: ResultTable }> = (rt) => {
  return (
    <table style={{ borderCollapse: 'collapse', border: '1px solid black' }}>
      <thead>
        <tr>
          {/* Rata	Scadenza	Capitale	Rata	Quota capitale	Quota interessi	Debito capitale residuo	Tot interessi */}
          <th style={{ border: '1px solid black', padding: '8px' }}>Rata</th>
          <th style={{ border: '1px solid black', padding: '8px' }}>Scadenza</th>
          <th style={{ border: '1px solid black', padding: '8px' }}>Capitale</th>
          <th style={{ border: '1px solid black', padding: '8px' }}>Rata Quota capitale</th>
          <th style={{ border: '1px solid black', padding: '8px' }}>Quota interessi</th>
          <th style={{ border: '1px solid black', padding: '8px' }}>Debito capitale residuo</th>
          <th style={{ border: '1px solid black', padding: '8px' }}>Tot interessi</th>
        </tr>
      </thead>
      <tbody>
        {rt.p.map((u, i) => <tr key={i}>
          {/* {Object.entries(u).map(([fn, fv], i2) => <td key={i2}>{typeof fv == 'number' ? fv : null}</td>)} */}
        <td>

        </td>
        
        
        </tr>)}
        {/* <tr>
          <td style={{ border: '1px solid black', padding: '8px' }}>{item.key}</td>
        </tr> */}
        {/* {for((item, index) => (
 
        ))} */}
      </tbody>
    </table>
  );
};

export default Table;
