import { Card } from '@mui/material'
import React from 'react'
import { CardMedia } from '@mui/material'

export const project = ({img}) => {
  return (
<Card style={{margin:0,
    padding:0}}>
<CardMedia
        component="img"
        alt="green iguana"
        height="270"
        image={img.image}
      />
</Card>
    )
}
export default project