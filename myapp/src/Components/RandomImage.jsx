import React, { useState } from 'react';
// import {
//     FacebookShareButton,
//     TelegramShareButton,
//     TwitterShareButton,
//     WhatsappShareButton,
// } from "react-share";
import {
    FacebookShareCount, 
    // TelegramShareCount, TwitterShareCount, WhatsappShareCount
} from "react-share";
import {
    FacebookIcon,
    // FacebookMessengerIcon,
    // TelegramIcon,
    // TwitterIcon,
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

    return (
        <div>
            <h1>Random Image Generator</h1>
             {/* <img src={image} alt="Random Nature Image" style={{ height: '15rem', width: '30rem' }} /> */}
            <br />
            <button type='submit' onClick={generateImage}>GENERATE</button><br />
            Share : {" "}<FacebookIcon size={32} round={true} />{" "}<WhatsappIcon size={32} round={true} />
            <FacebookShareCount url={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent({})}`}>
                {(shareCount) => <span className="myShareCountWrapper">{shareCount}</span>}
            </FacebookShareCount>
            <div>
                
            </div>
        </div>
    );
};

export default RandomImage;
