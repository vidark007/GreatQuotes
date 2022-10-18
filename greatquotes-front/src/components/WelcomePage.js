import React from 'react';
import classes from './Welcome.module.css'
import img from '../assets/welcome-img2.jpg'

function WelcomePage() {
    return (
        <div className={classes['welcome-container']}>
            <section className={classes.welcome}>
                <h1>Welcome</h1>
                <h3>About "Great-Quote"</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias animi commodi doloremque fugiat id minima provident quis unde voluptatibus. Aliquid dolor error facere nisi omnis porro, quae quo ullam.Accusamus alias animi commodi doloremque fugiat id minima provident quis unde voluptatibus.
                    Aliquid dolor error facere nisi omnis porro, quae quo ullam.</p>
            </section>
                <div className={classes['img-container']}>
                    <img src={img}/>
                </div>
        </div>
    );
}

export default WelcomePage;