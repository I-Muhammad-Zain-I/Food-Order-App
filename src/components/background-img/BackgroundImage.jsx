import React, { useState, useEffect } from 'react'
import img1 from '../../assets/images/1.jpg';
import img2 from '../../assets/images/2.jpg';
import img3 from '../../assets/images/3.jpg';

const images = [
    img1, img2, img3
]

const BackgroundImage = (props) => {

    // const [backgroundImage, setBackgroundImage] = useState('');

    // let counter = 0;
    // const getRandomBackgroundImage = () => {
    //     if(counter < 3) {
    //         // setCounter(() => counter + 1);
    //         console.log('Counter: ', counter )
    //         return images[counter++];
    //     } else {
    //         // setCounter(0);
    //         counter = 0;
    //         console.log('Counter: 0');
    //         return images[0]
    //     }
        
    // }

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //       setBackgroundImage(getRandomBackgroundImage());
    //     }, 5000);
    //     return () => clearInterval(interval);
    //   }, []);







    return (
        <div style={{backgroundImage: `url(${images[0]})`}}
            className='background-image'>
            {props.children}
        </div>
    )
}

export default BackgroundImage