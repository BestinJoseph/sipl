import React, { useState } from 'react'
import { Box, Button, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import { Formik, Form, Field } from 'formik'
import moment from 'moment'

const RegisterForm = () => {
    const [initialValues, setInitialValues] = useState({fullname: '', state: '', teamname: 'default', dob: moment(Date.now()).format('yyyy-MM-DD'), passport: '' })

    const teams = ['Sinmar CC', 'KK Sports', 'Indian Strikers', 'Indian Strikers United', "TBCC", "Techno Make CC", "Challanger XI", "REGC"]

    const handleSubmit = (values, actions) => {

    }
    console.log(initialValues)

    return (
        <Box sx={{maxWidth:500, p:3}}>
            <Typography variant="h6" sx={{fontWeight:'bold', pb:3}}>Register Form</Typography>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                <Form autoComplete='off'>
                    <Box sx={{pb:2}}>
                        <Field name="fullname" label="Full Name" type="text" as={TextField} fullWidth/>
                    </Box>
                    <Box sx={{pb:2}}>
                        <Field name="State" label="State" type="text" as={TextField} fullWidth/>
                    </Box>
                    <Box sx={{pb:2}}>
                        <Field name="teamname" type="text" as={Select} fullWidth sx={{textAlign: 'left'}}>
                            <MenuItem value="default">Selection your Team</MenuItem>
                            {
                                teams.map( (team, index) => (
                                    <MenuItem key={index} value={team}>{team}</MenuItem>
                                ))
                            }
                        </Field>
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