import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { NavLink } from 'react-router-dom';



const CategoryCard = (props) => {

    const { strCategory, strCategoryThumb, strCategoryDescription } = props.category;

    return (
        <Grid item xs={2} sm={4} md={4}>
            <Card sx={{ maxWidth: 345, height: "100%" }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={strCategoryThumb}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {strCategory}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {strCategoryDescription.slice(0, 100)}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small"><NavLink to={`/categoryDetails/${strCategory}`} style={{ color: 'inherit', textDecoration: 'none' }}>See ALL</NavLink></Button>
                </CardActions>
            </Card>

        </Grid>

    );
};

export default CategoryCard;