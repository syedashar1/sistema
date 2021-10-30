import { Button } from '@mui/material'
import React, { useState } from 'react'
import Layout from '../components/dashboard/Layout'
import TitleBar from '../components/dashboard/TitleBar'
import Filtors from '../components/Filtors'

export default function TestPage() {


    const [x, setX] = useState('')
    const [y, setY] = useState('')
    const [Codigo, setCodigo] = useState([])
    const [Tilto, setTilto] = useState([])

    return (
        <Layout>
        <TitleBar title={'Test Page'} path={'  abc / xyz /'} >
        <Button variant='outlined' style={{borderRadius:'30px',margin:'0px 2px'}} > Click Test </Button>
        <Button variant='outlined' style={{borderRadius:'30px',margin:'0px 2px'}} > Click Test </Button>
        <Button variant='outlined' style={{borderRadius:'30px',margin:'0px 2px'}} > Click Test </Button>
        </TitleBar>
        

        <Filtors x={x} y={y} setCodigo={setCodigo} setTilto={setTilto} Codigo={Codigo} Tilto={Tilto} setY={setY} setX={setX}/>
        
        
        </Layout>
        
        
    )
}
