import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { useHistory } from 'react-router-dom';



const MealCard = (props) => {
    const { idMeal, strMeal, strMealThumb } = props.meal;

    let history = useHistory();
    const seeMealDetails = () => {
        history.push(`/mealDetails/${idMeal}`)
    }
    return (
        <Grid item xs={2} sm={4} md={4}>
            <Card sx={{ maxWidth: 345, height: "100%" }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={strMealThumb}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {strMeal}
                    </Typography>

                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small" onClick={seeMealDetails}>See Details</Button>
                </CardActions>
            </Card>
        </Grid>

    );
};

export default MealCard;