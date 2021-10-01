import { Box, CircularProgress, Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import CategoryCard from '../CategoryCard/CategoryCard';

const Home = () => {

    const [mealsCategory, setMealsCategory] = useState([]);

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then(res => res.json())
            .then(data => setMealsCategory(data.categories))

    }, [])
    return (
        <Box sx={{ mt: 6 }}>
            <Container>
                {
                    mealsCategory.length === 0 ?
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <CircularProgress />
                        </Box>
                        :
                        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                            {
                                mealsCategory.map(category => <CategoryCard key={category.idCategory} category={category}></CategoryCard>)
                            }
                        </Grid>
                }
            </Container>

        </Box>
    );
};

export default Home;