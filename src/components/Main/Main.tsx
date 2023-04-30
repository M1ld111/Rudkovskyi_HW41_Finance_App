import React from 'react'
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@mui/material'
import Form from './Form/Form'
import List from './List/List'

const Main = () => {
  return (
    <Card style={{backgroundColor: 'rgba(0, 0, 0, 0.3)', color: 'rgba(205, 205, 205, 1)', height: '100vh'}}>
        <CardHeader title="Finance Tracker" />
        <CardContent>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography align='center' variant='h5'>Total Balance $100</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Divider style={{backgroundColor: 'rgba(205, 205, 205, 1)'}} />
                </Grid>
                <Grid item xs={12}>
                    <Form />
                </Grid>
            </Grid>
        </CardContent>
        <CardContent>
            <Grid container spacing={2}>
                <Grid item xs={12} style={{height: '250px', paddingTop: '10px', paddingBottom: '10px'}}>
                    <List />
                </Grid>
            </Grid>
        </CardContent>
    </Card>
  )
}

export default Main