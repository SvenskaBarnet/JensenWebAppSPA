import React from "react";
import '../App.css';
import styles from '../styles/Scroll.module.css';

const Scroll = () => {
    return (
        <div className={styles.scroll}>
            <a href="#">
                <img src="https://static.vecteezy.com/system/resources/previews/012/596/723/non_2x/up-arrow-simple-symbol-with-transparent-background-png.png"
                    alt="Arrow" />
            </a>
        </div>
    );
}

export default Scroll;
