import React, { useState } from 'react'
import FlipCard from './FlipCard'
import { Grid } from '@mui/material'
import img1 from '../img/img1.svg'
import img2 from '../img/img2.svg'
import img3 from '../img/img3.svg'
import img4 from '../img/img4.svg'

const FlipCards = () => {
    const [cards, setCards] = useState([
        {
            id: 1,
            frontText: 'Gestión de carteras de inversión',
            backTitle: 'Gestión de carteras de inversión',
            backText: 'Utilizamos un enfoque personalizado para cada cliente,seleccionando los activos adecuados y diversificando para minimizar el riesgo',
            img: {img: img1}
        },
        {
            id: 2,
            frontText: 'Análisis de inversiones',
            backTitle: 'Análisis de inversiones',
            backText: 'Realizamos un análisis exhaustivo de los mercados y los activos en los que invertimos, para asegurarnos de que estamos tomando las mejores decisiones de inversión.',
            img: {img: img2}
        },
        {
            id: 3,
            frontText: 'Planificación financiera',
            backTitle: 'Planificación financiera',
            backText: 'Ayudamos a nuestros clientes a establecer metas financieras a largo plazo y desarrollar un plan para alcanzarlas.',
            img: {img: img3}
        
        },
        {
            id: 4,
            frontText: 'Informes Periódicos',
            backTitle: 'Informes Periódicos',
            backText: 'Generamos informes periódicos para mantener a nuestros clientes informados sobre el desempeño de sus inversiones',
            img: {img: img4}
        },

    ])


    return (
        <Grid container justifyContent={'center'} flexDirection={'row'}>
            {cards.map((card) => (
        <Grid item md={3}>

                <FlipCard 
                key={card.id} 
                frontText={card.frontText} 
                backTitle={card.backTitle} 
                backText={card.backText} 
                img={card.img.img} />

        </Grid>
            ))}
        </Grid>        
    )
}

export default FlipCards