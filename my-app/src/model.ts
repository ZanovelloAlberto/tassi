import { Dispatch, SetStateAction } from "react";

export type variazioneMutuo = { data: Date, variazione: number }[];
export type listaTassoIntaresse = { data: Date, nuovoTasso: number }[];

export type state<S> = [S, Dispatch<SetStateAction<S>>];

export type ResultTable = {
    Rata: number
    Scadenza: Date
    Capitale: number
    QuotaCapitale: number
    QuotaInteressi: number
    DebitoCapitaleResiduo: number
    TotInteressi: number

}[]

export type Input = {
    tassoIniziale: number
    lti?: listaTassoIntaresse // facoltativo
    vm?: variazioneMutuo // facoltativo
    capitale: number
    dataPrimaRata: Date
    durataMesi: number
}

export type Error = "not enought money" | "ciao";

export const calcola: (input: Input) => { table?: ResultTable, error?: Error } = (inp) => {

    var a: ResultTable = [];
    var time = inp.dataPrimaRata;
    var Rata = calcolaRataConstante(inp.tassoIniziale, 12, inp.capitale, inp.durataMesi)
    // Rata = Number(Rata.toFixed(2))
    console.log(11.3 - 0.37);
    
    for (let i = 0; i < inp.durataMesi; i++) {
        // console.log(i);
        // let lastone = i > 0 ? a[i - 1] : undefined;
        // let DebitoCapitaleResiduo = lastone?.DebitoCapitaleResiduo ?
        //     lastone.DebitoCapitaleResiduo - QuotaCapitale : inp.capitale - QuotaCapitale;
            let Capitale =i > 0 ? a[i - 1].DebitoCapitaleResiduo : inp.capitale
            let QuotaInteressi = calcola_interesse(inp.tassoIniziale, Capitale, 12)
            QuotaInteressi = Number(QuotaInteressi.toFixed(8))
            let QuotaCapitale = Rata - QuotaInteressi
            let DebitoCapitaleResiduo=  Capitale - QuotaCapitale
            // QuotaCapitale = Number(QuotaCapitale.toFixed(2))
            // DebitoCapitaleResiduo = Number(DebitoCapitaleResiduo.toFixed(2))

        a.push({
            Rata,
            Scadenza: time,
            QuotaCapitale,
            DebitoCapitaleResiduo ,
            QuotaInteressi ,
            TotInteressi: i > 0 ? a[i - 1].TotInteressi + QuotaInteressi : QuotaInteressi,
            Capitale
        })
        // time.setMonth(time.getMonth() + 1)
    }
    console.log(a);
    
    return { table: a }
}
const calcola_interesse = (tassoAnnule: number, capitaleResiduo: number, cadenzaAnnualeRata = 12): number => {
    const tassoPerRata = tassoAnnule / cadenzaAnnualeRata
    return capitaleResiduo * tassoPerRata;
}

const calcolaRataConstante = (tassoAnnule: number, cadenzaAnnualeRata = 12, capitale: number, nRate: number): number => {
    const tassoPerRata = tassoAnnule / cadenzaAnnualeRata
    const uppperRate = tassoPerRata * Math.pow(1 + tassoPerRata, nRate)
    const lowerRate = Math.pow(1 + tassoPerRata, nRate) - 1
    return capitale * (uppperRate / lowerRate)
}
const increaseMonth = (current: Date, increaseMonth?: number): Date => {
    current.getMonth() == 12 ? current.setMonth(1) : current.setMonth(current.getMonth() + 1);
    return current;
}