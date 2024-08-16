import * as React from 'react';
import "./CardStyle.css"
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import { Link } from "react-router-dom";
import { RiInstagramFill } from "react-icons/ri";

export default function RecipeReviewCard(props) {

    const { firstAlphabet, name, username, image, to } = props;

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        {firstAlphabet}
                    </Avatar>
                }
                action={
                    <Link to={to} target='blank_'>
                        <RiInstagramFill className='instaIcon' />
                    </Link>
                }
                title={name}
                subheader={username}
            />

            <CardMedia
                component="img"
                height="196"
                image={image}
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere maxime assumenda pariatur laudantium, temporibus dolore ullam voluptatem eveniet dolorum, quis maiores consequatur quibusdam. Aut, porro atque. Possimus nisi reiciendis sequi.
                </Typography>
            </CardContent>
        </Card>
    );
}
