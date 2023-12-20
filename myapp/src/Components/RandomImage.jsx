import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import {
    FacebookShareButton,
    TelegramShareButton,
    TwitterShareButton,
    WhatsappShareButton,
} from "react-share";
import {
    FacebookShareCount,
    // TelegramShareCount, TwitterShareCount, WhatsappShareCount
} from "react-share";
import {
    FacebookIcon,
    // FacebookMessengerIcon,
    // TelegramIcon,
    TwitterIcon,
    WhatsappIcon,
} from "react-share";
const RandomImage = () => {
    const [image, setImage] = useState('');

    const generateImage = () => {
        const category = 'nature';
        const apiKey = '/NJfgfqrp4N6Nm+PjHBVkA==pacj55sOegVemKlA';
        fetch(`https://api.api-ninjas.com/v1/randomimage?category=${category}`, {
            headers: { 'X-Api-Key': apiKey, Accept: 'image/jpg' },
        })
            .then((response) => response.blob())
            .then((data) => {
                setImage(URL.createObjectURL(data));
                console.log(image)
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    };
    const imageUrl=''
    return (
        <div >
            <Helmet>
                <title>Random Nature Image</title>
                <meta name="description" content="Check out this random nature image!" />
                <meta property="og:title" content="Random Nature Image" />
                <meta property="og:description" content="Check out this random nature image!" />
                <meta property="og:image" content={image} />
                <meta property="og:url" content={window.location.href} />
                <meta property="og:type" content="image" />
            </Helmet>

            <h1>Random Image Generator</h1>
            <img src={image} alt="Random Nature Image" style={{ height: '15rem', width: '30rem', border: 'solid gold 10px', borderRadius: '50px', boxShadow: '5px 5px 15px red' }} />
            <br /><br />
            <button type='submit' onClick={generateImage}>GENERATE</button><br /><br />
            Share : {" "}
            <FacebookShareButton url={image}><FacebookIcon size={32} round={true} /></FacebookShareButton>
            <WhatsappShareButton url={image}><WhatsappIcon size={32} round={true} /></WhatsappShareButton>
            <TwitterShareButton url={image}><TwitterIcon size={32} round={true} /></TwitterShareButton>
        </div>
    );
};

export default RandomImage;