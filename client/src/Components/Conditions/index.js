import React from 'react'
import { Box, Grid, Paper, Typography } from '@mui/material'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import { useNavigate, useParams } from 'react-router-dom'

import data from './conditions'

const Conditions = () => {
    const Navigate = useNavigate()
    const { type } = useParams()
    
    return (
        <Box sx={{display:'flex', flexDirection:'column', width:'500px', }}>
            <Box sx={{display:'flex', alignItems:'center', background: 'yellow', p:2, mb:5}}>
                <ArrowBackIosNewIcon onClick={() => Navigate('/')} sx={{cursor:'pointer', mr:2}} />
                <Typography variant="h6" sx={{mt:.25}}>BACK</Typography>
            </Box>
            <Box sx={{px:3, mb:2}}>
                <Typography variant="h6" sx={{fontWeight:700}}>SIPL Eligibility Criteria</Typography>
            </Box>
            <Box sx={{p:2, mb:3}}>
                <Grid container spacing={3} sx={{textAlign:'center', }}>
                    <Grid item xs={3} >
                        <Paper sx={{height:80, display:'flex', alignItems:'center',justifyContent:'center', }}>
                            <Typography variant="h4">W</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper sx={{height:80, display:'flex', alignItems:'center',justifyContent:'center', }}>
                        <Typography variant="h4">X</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper sx={{height:80, display:'flex', alignItems:'center',justifyContent:'center', }}>
                        <Typography variant="h4">Y</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper sx={{height:80, display:'flex', alignItems:'center',justifyContent:'center', }}>
                        <Typography variant="h4">Z</Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ px:3}}>
                {
                    data && data[type].map((con, index) => (
                        <Typography variant="body1" key={index} sx={{ mb:2 }}>{ con }</Typography>
                    ))
                }
            </Box>
        </Box>
    )
}

export default Conditions