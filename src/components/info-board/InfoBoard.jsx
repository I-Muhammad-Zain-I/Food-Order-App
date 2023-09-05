import React from 'react';
import styles from './InfoBoard.module.css';

const InfoBoard = React.memo(() => {
  return (
    <div className={`${styles['info-flex-center']}`}>
        <section className={`${styles['info-board']}`}>
            <h2 className={`${styles['board__heading']}`}>
                Delicious Food, Delivered to you!
            </h2>
            <p className={`${styles['board__desc']}`}>
            Welcome to ReactMeals, your neighborhood spot for delicious food. We're committed to using fresh, locally-sourced ingredients to create dishes that are both flavorful and satisfying. Our friendly and attentive staff is here to make sure you have a memorable dining experience
            </p>
            <p className={`${styles['board__desc']}`}>
            Whether you're looking for a casual meal with friends or a romantic dinner for two, ReactMeals is the perfect place for you. Come on in and see for yourself!, 
            </p>
        </section>
    </div>
  )
});

export default InfoBoard;