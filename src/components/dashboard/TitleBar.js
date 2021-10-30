import { Container, Grid, Paper, Typography } from '@mui/material'
import React from 'react'

export default function TitleBar({title,path,children}) {
    return (
        <Paper style={{padding:'5px 20px',marginTop:'10px'}} >
        <Grid container >
            <Grid item sm={3} style={{textAlign:'left'}}>
            <Typography style={{color:'lightgrey',letterSpacing:'0.2rem',wordSpacing:'0.3rem'}} >{path}</Typography>
            <Typography style={{fontSize:'2rem',fontWeight:600,color:'#1c58ad'}} >{title}</Typography>
            </Grid>

            <Grid item sm={5}>
            </Grid>
            
            <Grid item sm={4}><br/>
            {children}
            </Grid>
        </Grid>
        </Paper>
    )
}
