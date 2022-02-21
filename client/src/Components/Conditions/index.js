import React from 'react'
import { Box, Typography } from '@mui/material'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import { useNavigate } from 'react-router-dom'

const Conditions = () => {
    const Navigate = useNavigate()
    
    return (
        <Box>
            <Box sx={{display:'flex', alignItems:'center', background: 'yellow', p:2, mb:3}}>
                <ArrowBackIosNewIcon sx={{mr:2}} onClick={() => Navigate('/')} />
                <Typography variant="h6">BACK</Typography>
            </Box>
            <Box sx={{px:3}}>
                <Typography variant="h5">SIPL Eligibility Criteria</Typography>
                
            </Box>
        </Box>
    )
}

export default Conditions