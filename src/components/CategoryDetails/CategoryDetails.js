import { CircularProgress, Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import MealCard from '../MealCard/MealCard';

const CategoryDetails = () => {
    let { strCategory } = useParams();

    const [meals, setMeals] = useState([]);

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${strCategory}`)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [strCategory])


    return (
        <Box sx={{ mt: 6 }}>
            <Container>
                {
                    meals.length === 0 ?
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <CircularProgress />
                        </Box>
                        :
                        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                            {
                                meals.map(meal => <MealCard key={meal.idMeal} meal={meal}></MealCard>)
                            }
                        </Grid>
                }
            </Container>

        </Box>
    );
};

export default CategoryDetails;