import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import { inputLabelClasses } from "@mui/material/InputLabel";
import { styled } from "@mui/material/styles";

const StyledTextField = styled(TextField)({
    [`& .${outlinedInputClasses.root} .${outlinedInputClasses.notchedOutline}`]: {
        borderColor: "white"
    },
    [`&:hover .${outlinedInputClasses.root} .${outlinedInputClasses.notchedOutline}`]: {
        borderColor: "white"
    },
    [`& .${outlinedInputClasses.root}.${outlinedInputClasses.focused} .${outlinedInputClasses.notchedOutline}`]: {
        borderColor: "white"
    },
    [`& .${outlinedInputClasses.input}`]: {
        color: "white"
    },
    [`&:hover .${outlinedInputClasses.input}`]: {
        color: "white"
    },
    [`& .${outlinedInputClasses.root}.${outlinedInputClasses.focused} .${outlinedInputClasses.input}`]: {
        color: "white"
    },
    [`& .${inputLabelClasses.outlined}`]: {
        color: "white"
    },
    [`&:hover .${inputLabelClasses.outlined}`]: {
        color: "white"
    },
    [`& .${inputLabelClasses.outlined}.${inputLabelClasses.focused}`]: {
        color: "white"
    }
});



const Form = () => {
    return (
        <Box
            sx=
            {{
                '& > :not(style)': { m: 1, width: '25ch' },
                display: 'flex',
                color: '#fff',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                alignContent: 'center'
            }}
            component="form"
            noValidate
            autoComplete="off"
        >
            <Typography sx={{ textAlign: 'center', fontSize: '2rem' }}>Escríbenos</Typography>

            <Grid container spacing={3} sx={{ display: 'flex', alignItems: 'center', justifyItems: 'center', alignContent: 'center' }}>
                <Grid item xs={12}>
                    <StyledTextField
                        required
                        id="outlined-required"
                        label="Nombre"
                        sx={{ width: '100%' }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <StyledTextField
                        required
                        id="outlined-required"
                        label="E-mail"
                        sx={{ width: '100%' }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <StyledTextField
                        required
                        id="outlined-required"
                        label="Mensaje"
                        sx={{ width: '100%' }}
                        multiline
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button
                        variant="outlined"
                        sx={{ width: '100%' }}>
                        Enviar
                    </Button>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Form