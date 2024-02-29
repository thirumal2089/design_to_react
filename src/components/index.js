import pic from './picture.png';
import './index.css';
import React, { useState, useEffect } from 'react';

const Home = () => {
    const [paraContent, setParaContent] = useState("Creating something beautiful with coding is hugely rewarding! It takes discipline and hours of effort, but the sense of accomplishment at the end is worth it.");
    const [buttonContent,setButtonContent] = useState("Try Now");
    useEffect(() => {
        function handleResize() {
            if (window.innerWidth <= 464) {
                setButtonContent("Try Now");
                setParaContent("Subscribe to HackerKID’s YouTube channel to never miss the coding tricks, hacks, parental guides, tutorials, & other exclusive content to make your coding journey more fun, enriching and effective!");
            }
            else if (window.innerWidth <= 680 ) {
                setButtonContent("Play Now");
                setParaContent("Subscribe to HackerKID’s YouTube channel to never miss the coding tricks, hacks, parental guides, tutorials, & other exclusive content to make your coding journey more fun, enriching and effective!");
            }
            else {
                setButtonContent("Try Now");
                setParaContent("Creating something beautiful with coding is hugely rewarding! It takes discipline and hours of effort, but the sense of accomplishment at the end is worth it.");
            }
        }

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="container">
            <div className='sub-container1'>
                <h1 className='title'>Free Trial</h1>
                <p className='para'>{paraContent}</p>
                <button className='button'>{buttonContent}</button>
            </div>

            <div className='sub-container2'>
                <img src={pic} className="picture" alt="example" />
            </div>
        </div>
    );
};
export default Home;