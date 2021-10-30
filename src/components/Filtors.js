import { Grid, Paper, Typography } from '@mui/material'
import React from 'react'

export default function Filtors({x ,y ,setCodigo ,setTilto ,Codigo, Tilto ,setY, setX}) {
    return (
    <Grid container >

        <Grid item md={6} >
        <Paper>
        <Typography style={{fontSize:'1.6rem',fontWeight:500,color:'#1c58ad'}} >Filtros</Typography>
        </Paper>
        </Grid>

    </Grid>
    )
}
