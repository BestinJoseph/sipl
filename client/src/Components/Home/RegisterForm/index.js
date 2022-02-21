import React from 'react'
import { Box, Button, TextField, Typography } from '@mui/material'
import { Formik, Form, Field } from 'formik'

const RegisterForm = () => {
    return (
        <Box sx={{maxWidth:500, p:3}}>
            <Typography variant="h6" sx={{fontWeight:'bold', pb:3}}>Register Form</Typography>
            <Formik>
                <Form autoComplete='off'>
                    <Box sx={{pb:2}}>
                        <Field name="fullname" label="Full Name" type="text" as={TextField} fullWidth/>
                    </Box>
                    <Box sx={{pb:2}}>
                        <Field name="State" label="State" type="text" as={TextField} fullWidth/>
                    </Box>
                    <Box sx={{pb:2}}>
                        <Field name="teamname" label="Team Name" type="text" as={TextField} fullWidth/>
                    </Box>
                    <Box sx={{pb:2}}>
                        <Field name="dob" label="Date of Birth" type="date" as={TextField} fullWidth/>
                    </Box>
                    <Box sx={{pb:2}}>
                        <Field name="passport" label="Passport No." type="text" as={TextField} fullWidth/>
                    </Box>
                    <Box sx={{textAlign:'left', }}>
                        <Button type="submit" variant="outlined" size="large">Register</Button>
                    </Box>
                </Form>
            </Formik>
        </Box>
    )
}

export default RegisterForm