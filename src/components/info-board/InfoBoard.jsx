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
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia quam temporibus nam iste deserunt architecto quae laborum doloribus ratione officia, molestiae, aspernatur quo 
            </p>
            <p className={`${styles['board__desc']}`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium cum suscipit nihil illo officiis est molestias modi perspiciatis, 
            </p>
        </section>
    </div>
  )
});

export default InfoBoard