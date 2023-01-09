import React, { useState, useEffect } from 'react';
import { serviceJokes } from '../../services/jokes-chuckService.js'
import { Button, IconButton } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { boolean } from 'yup';

const ChuckJokes = () => {
    const [joke, setJoke] = useState({});
    const [like, setLike] = useState(0);
    const [dislike, setDislike] = useState(0);
    const [disableLike, setDisableLike] = useState(true);
    const [disableDis, setDisableDis] = useState(true);

    useEffect(() => {
        generateJoke()
    }, []);

    const generateJoke = () => {
        serviceJokes()
            .then((response) => {
                setJoke(response.data)
                setDisableDis(true)
                setDisableLike(true)
            })
            .catch((error) => {
                alert(`error: ${error}`)
            })
    }

    const likes = () => {
        setLike(like + 1)
        setDisableDis(false)
    }
    const Dislike = () => {
        setDislike(dislike + 1)
        setDisableLike(false)
    }

    return (
        <div>
            <div style={{ marginBottom: '10px' }}>
                <h4>{joke.value}</h4>
                <Button variant="contained" onClick={likes}  disabled={!disableLike} style={{ marginRight: '5px' }}> <ThumbUpIcon /> </Button>
                <Button variant="outlined" onClick={Dislike} disabled={!disableDis} ><ThumbDownIcon /> </Button>
            </div>
            <button onClick={generateJoke}> chiste random</button>
            <div>
                <p>Likes: {like}</p>
                <p>Dislikes: {dislike}</p>
            </div>
        </div>
    );
}

export default ChuckJokes;
