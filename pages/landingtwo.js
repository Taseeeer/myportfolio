import styles from '../styles/Home.module.css';
import Image from "next/image";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { useEffect, useState } from 'react';

export default function Landingtwo({ themeValue }) {

    const [theme, setTheme] = useState(themeValue);    
    
    useEffect(() => {
        setTheme(themeValue);
    }, [themeValue]);
    console.log(themeValue);
   

    return (
        <>
            <div className={styles.outermostTwo}
            style={{backgroundColor: `${theme ? "#22262e" : ""}`, color: `${theme ? "whitesmoke" : ""}`, transition: "0.5s ease"}}>
                <div className={styles.toolheading}>
                    <p className={styles.toolsname}>Tools I use.</p>
                </div>
                    <div className={styles.toolsDiv}>
                            <div className={styles.outterbox}>
                                <div className={styles.box}>
                                    <img className={styles.img} src="/html5.png" alt="5"  />
                                </div>
                            </div>
                            <div className={styles.outterbox}>

                                <div className={styles.box}>
                                    <img className={styles.imgcss} src="/css.png" alt="css" />
                                </div>
                            </div>
                            <div className={styles.outterbox}>
                                <div className={styles.box}>
                                    <img className={styles.img} src="/js.png" alt="javascript" />
                                </div>
                            </div>
                    </div>
                    <div className={styles.toolsDiv}>
                            <div className={styles.outterbox}>
                                <div className={styles.box}>
                                    <img className={styles.imgreact} src="/r.png" alt="react" />
                                </div>
                            </div>
                            <div className={styles.outterbox}>

                                <div className={styles.box}>
                                    <img className={styles.img} src="/next.png" alt="next" />
                                </div>
                            </div>
                            <div className={styles.outterbox}>
                                <div className={styles.box}>
                                    <img className={styles.img} src="/graphql.png" alt="graphql" />
                                </div>
                            </div>
                    </div>
            </div>
        </>
    )
}