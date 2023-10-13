import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Button, Divider, TextField } from '@mui/material';
import { Input, ResultTable, calcola } from './model';
import Table from './resutl';
import MuiResult from './muiResutl';

const validationSchema = yup.object({
    tassoIniziale: yup
        .string()
        .required('Email is required'),
    capitale: yup
        .number()
        .required('Password is required'),
    dataPrimaRata: yup.date().required("bello"),
    durataMesi: yup.number().required("ladfjlasjl")
});

export const WithMaterialUI = () => {
    const [out, setOut ] = useState<{ table? : ResultTable, error? : Error}>({});

    
    const formik = useFormik({
        initialValues: {
            tassoIniziale: 0.04,
            capitale: 1,
            dataPrimaRata: new Date(),
            durataMesi: 1
        } as Input,
        validationSchema: validationSchema,
        onSubmit: (values) => {
            // alert(JSON.stringify(values, null, 2));
            const tab = calcola(values);
            setOut({table : tab.table})
        },
    });

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <TextField
                                        style={{paddingBlock: 10}}
                                        fullWidth
                    name="tassoIniziale"
                    label="tasso iniziale"
                    value={formik.values.tassoIniziale}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.tassoIniziale && Boolean(formik.errors.tassoIniziale)}
                    helperText={formik.touched.tassoIniziale && formik.errors.tassoIniziale}
                />
                {/* <span;a /> */}
                <TextField
                    style={{paddingBlock: 10}}
                    fullWidth
                    name="capitale"
                    label="capitale Iniziale"
                    value={formik.values.capitale.toString()}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.capitale && Boolean(formik.errors.capitale)}
                    helperText={formik.touched.capitale && formik.errors.capitale}
                />

                <TextField
                    fullWidth
                    //   id=""
                    style={{paddingBlock: 10}}
                    name="dataPrimaRata"
                    label="data prima rata"
                    type="date"
                    value={formik.values.dataPrimaRata.toLocaleDateString("sv")}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.dataPrimaRata && Boolean(formik.errors.dataPrimaRata)}
                    // helperText={formik.touched.dataPrimaRata && formik.errors.dataPrimaRata}
                />
 
                <TextField
                    fullWidth
                    id="d"
                    style={{paddingBlock: 10}}
                    name="durataMesi"
                    label="durata mesi"
                    type="numeric"
                    value={formik.values.durataMesi.toString()}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.durataMesi && Boolean(formik.errors.durataMesi)}
                    helperText={formik.touched.durataMesi && formik.errors.durataMesi}
                />

                <Button color="primary" variant="contained" fullWidth type="submit">
                    Submit
                </Button>
            </form>

            {out.table ? <MuiResult p={out.table}/> : <>{out.error ?? ""}</>}
        </div>
    );
};
