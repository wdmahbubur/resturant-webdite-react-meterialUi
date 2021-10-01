import { CircularProgress, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import ReactPlayer from 'react-player'



const MealDetails = () => {
    let { idMeal } = useParams();

    const [mealDetail, setMealDetail] = useState([]);

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
            .then(res => res.json())
            .then(data => setMealDetail(data.meals[0]));
    }, [idMeal])

    const { strMeal, strCategory, strArea, strInstructions, strMealThumb, strYoutube } = mealDetail;

    return (
        <Box sx={{ mt: 6 }}>
            {
                mealDetail.length === 0 ?
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <CircularProgress />
                    </Box>
                    :
                    <Container>
                        <Typography
                            variant="h4"
                            component="div"
                            sx={{ mb: 2 }}
                        >
                            {strMeal}
                        </Typography>
                        <img src={strMealThumb} alt={strMeal} style={{ width: 700, height: 350 }} />
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ display: 'flex', justifyContent: 'space-between' }}
                        >
                            <Typography variant="span">Category: {strCategory}</Typography>
                            <Typography variant="span">Country: {strArea}</Typography>
                        </Typography>

                        <Typography
                            variant="p"
                            component="div"
                        >
                            {strInstructions}
                        </Typography>
                        <ReactPlayer url={strYoutube} />


                    </Container>
            }
        </Box>
    );
};

export default MealDetails;