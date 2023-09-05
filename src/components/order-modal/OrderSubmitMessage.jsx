import React, { useEffect, useState } from 'react'
import styles from './OrderModal.module.css';
const OrderSubmitMessage = (props) => {
  
  const messageClass = props.flag ? `${styles.success}` : `${styles.failure}`
    const [timer, setTimer] = useState(3);

  useEffect(() => {

    let interval = ''
    if (timer > 0) {

        interval = setInterval(() => {
          setTimer((prevTimer) => prevTimer - 1);
        }, 1000);
    
      } else {
        props.setAppear(false);
        clearInterval(interval);
      }
    
    return () => clearInterval(interval);
  }, [timer])
 return (
    <div className={messageClass}>
        <p>{props.message}</p>
        <p>Exiting in {timer}s</p>
    </div>
  )
}

export default OrderSubmitMessage