import { CircularProgress, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import MealCard from '../MealCard/MealCard';

const SearchResult = () => {
    const { searchValue } = useParams();
    const [searchItem, setSearchItem] = useState([]);
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`)
            .then(res => res.json())
            .then(data => setSearchItem(data.meals))
    }, [searchValue])

    return (
        <Box sx={{ mt: 6 }}>
            {
                searchItem === null ?
                    <h1>No Result Found</h1>
                    :
                    searchItem.length === 0 ?
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <CircularProgress />
                        </Box>
                        :
                        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                            {
                                searchItem.map(item => <MealCard key={item.idMeal} meal={item}></MealCard>)
                            }
                        </Grid>
            }
        </Box>
    );
};

export default SearchResult;