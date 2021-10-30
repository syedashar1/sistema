import { Button, Chip, Container, Grid, Paper, TextField, Typography } from '@mui/material'
import React from 'react'
//{cartItems.map((item) => (
export default function Filtors({x ,y ,setCodigo ,setTilto ,Codigo, Tilto ,setY, setX}) {


    const handleDel = (n) => setCodigo(items => items.filter(x => x !== n)) 

    return (
    <Grid container >

        <Grid item md={7} >
        <Paper>
        <Typography style={{fontSize:'1.6rem',fontWeight:500,color:'#1c58ad',textAlign:'left',padding:'10px'}} >Filtros</Typography>
        <hr/>
        <Container>
        <br/>
        <TextField value={x} sx={{width:150,padding:'0px'}} label='Codigo' onChange={e=>setX(e.target.value)} />{' '}
        <TextField value={y} sx={{width:150 , marginRight:'20px'}} label='Titulo' onChange={e=>setY(e.target.value)} />
        <Button variant='contained' onClick={()=>{if(x==='') return ; setCodigo([...Codigo , x ]) ; setX('') }} >Limpar</Button>{' '}
        <Button variant='outlined' >Filtrar</Button>
        <div>
        <br/>
        {Codigo.map((x)=><Chip label={x} variant="outlined" onDelete={()=>handleDel(x)} />)}
        </div>
        </Container>
        <br/>

        </Paper>
        </Grid>

    </Grid>
    )
}
