import React from 'react'
import { Box, Button, Grid, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'

import RegisterForm from './RegisterForm'

const Home = () => {
    const Navigate = useNavigate()

    return (
        <Box sx={{display:'flex', flexDirection:'column', width:'500px', }}>
            <Box sx={{background:'purple', py:2, px:2, boxShadow:2, display: 'flex', justifyContent:'space-between', alignItems:'center', }}>
                <Typography variant="h5" sx={{ textAlign: 'center', fontWeight:'medium'}}>SUMMER <Typography component="span" sx={{fontWeight:700, fontSize:24, color:'white'}}>BASH</Typography></Typography>
                <MenuIcon />
            </Box>
            <Box sx={{mb:2}}>
                <Box sx={{my:4, maxWidth:500}}>
                    <Grid container>
                        <Grid item xs={3} sx={{textAlign: 'center'}}>
                            <Typography variant="h4" sx={{fontWeight: 'bold'}}>6</Typography>
                            <Typography variant="body1">Teams</Typography>
                        </Grid>
                        <Grid item xs={3} sx={{textAlign: 'center'}}>
                            <Typography variant="h4" sx={{fontWeight: 'bold'}}>24</Typography>
                            <Typography variant="body1">Foreginers</Typography>
                        </Grid>
                        <Grid item xs={3} sx={{textAlign: 'center'}}>
                            <Typography variant="h4" sx={{fontWeight: 'bold'}}>84</Typography>
                            <Typography variant="body1">Players</Typography>
                        </Grid>
                        <Grid item xs={3} sx={{textAlign: 'center'}}>    
                            <Typography variant="h4" sx={{fontWeight: 'bold'}}>30</Typography>
                            <Typography variant="body1">Leagues</Typography>
                        </Grid>
                    </Grid>
                </Box>
                <Box>
                    <Typography variant="subtitle2" color="info" sx={{textAlign:'center'}}>*check your eligibility before register</Typography>
                    <Box sx={{display:'flex', justifyContent:'center', mt:1}}>
                        <Button variant="outlined" color="primary" disableElevation sx={{mr:2}} onClick={()=> Navigate('conditions/players')}>Players</Button>
                        <Button variant="outlined" color="error" disableElevation onClick={()=> Navigate('conditions/sponsors')}>Sponsors</Button>
                    </Box>
                </Box>
            </Box>
            <RegisterForm />
        </Box>
    )
}

export default Home