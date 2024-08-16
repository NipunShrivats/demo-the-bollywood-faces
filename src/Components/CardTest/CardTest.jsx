import * as React from 'react';
import "./CardTestStyle.css"
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import { Link } from "react-router-dom";
import { FaCirclePlay } from "react-icons/fa6";

import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";

export default function CardTest(props) {
    const { firstAlphabet, name, username, image, to, test } = props;

    return (
        <Card sx={{ maxWidth: 345 }}>
            {/* <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        {firstAlphabet}
                    </Avatar>
                }
                action={
                    <Link to={to} target='blank_'>
                        <FaCirclePlay className='playIcon' />
                    </Link>
                }
                title={name}
                subheader={username}
            /> */}

            <Link to={to} target='blank_'>
                <CardMedia
                    className='img'
                    component="img"
                    height="196"
                    image={image}
                    alt="Paella dish"
                />
            </Link>
            <CardContent>
                <span className='coma comaL'><RiDoubleQuotesL /></span>
                <Typography variant="body2">
                    {test} <br />
                </Typography>
                <span className='quote-name'>— {name}</span>
                <span className='coma comaR'><RiDoubleQuotesR /></span>

            </CardContent>
        </Card>
    );
}
