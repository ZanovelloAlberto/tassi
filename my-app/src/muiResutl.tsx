import React from 'react';
import { variazioneMutuo, listaTassoIntaresse, ResultTable } from './model';

const MuiResult: React.FC<{ p: ResultTable }> = (rt) => {
    return (
        <table style={{ borderCollapse: 'collapse', border: '1px solid black' }}>
            <thead>
                <tr>
                    {/* Rata	Scadenza	Capitale	Rata	Quota capitale	Quota interessi	Debito capitale residuo	Tot interessi */}
                    <th style={{ border: '1px solid black', padding: '8px' }}>Scadenza</th>
                    <th style={{ border: '1px solid black', padding: '8px' }}>Capitale</th>
                    <th style={{ border: '1px solid black', padding: '8px' }}>Rata </th>
                    <th style={{ border: '1px solid black', padding: '8px' }}>Quota capitale  </th>
                    <th style={{ border: '1px solid black', padding: '8px' }}>Quota interessi</th>
                    <th style={{ border: '1px solid black', padding: '8px' }}>Debito capitale residuo</th>
                    <th style={{ border: '1px solid black', padding: '8px' }}>Tot interessi</th>
                </tr>
            </thead>
            <tbody>
                {rt.p.map((u, i) => <tr key={i}>
                    <td>{""}</td>
                    <td>{u.Capitale.toFixed ?  u.Capitale.toFixed(3) :  u.Capitale}</td>
                    <td>{u.Rata.toFixed(3)}</td>
                    <td>{u.QuotaCapitale.toFixed(3) }</td>
                    <td>{u.QuotaInteressi.toFixed(3)}</td>
                    <td>{u.DebitoCapitaleResiduo.toFixed(3)}</td>
                    <td>{u.TotInteressi.toFixed(3)}</td>

                </tr>)}
            </tbody>
        </table>
    );
};

export default MuiResult;
