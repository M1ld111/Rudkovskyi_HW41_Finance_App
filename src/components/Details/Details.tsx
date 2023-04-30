import React from 'react'
import { Card, CardHeader, CardContent, Typography } from '@mui/material'
// import { Doughnut } from 'react-chartjs-2'

interface DetailsProps {
  title: string;
}

const Details = ({ title }: DetailsProps) => {
  const borderStyle = {
    borderBottom: title === 'Income' ? '10px solid green' : '10px solid red',
    background: 'rgba(0, 0, 0, 0.3)',
    color: 'rgba(205, 205, 205, 1)'
  };

  return (
    <Card style={borderStyle}>
        <CardHeader title={title} />
        <CardContent>
            <Typography variant='h5'>$50</Typography>
        </CardContent>
    </Card>
  )
}

// export { DetailsProps };
export default Details