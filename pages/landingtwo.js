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
                                    <Image src="/html5.png" alt="5" width={200} height={200} />
                                </div>
                            </div>
                            <div className={styles.outterbox}>

                                <div className={styles.box}>
                                    <Image src="/css.png" alt="css" width={175} height={157} />
                                </div>
                            </div>
                            <div className={styles.outterbox}>
                                <div className={styles.box}>
                                    <Image src="/js.png" alt="javascript" width={180} height={180} />
                                </div>
                            </div>
                    </div>
                    <div className={styles.toolsDiv}>
                            <div className={styles.outterbox}>
                                <div className={styles.box}>
                                    <Image src="/r.png" alt="react" width={225} height={200} />
                                </div>
                            </div>
                            <div className={styles.outterbox}>

                                <div className={styles.box}>
                                    <Image src="/next.png" alt="next" width={175} height={157} />
                                </div>
                            </div>
                            <div className={styles.outterbox}>
                                <div className={styles.box}>
                                    <Image src="/graphql.png" alt="graphql" width={180} height={180} />
                                </div>
                            </div>
                    </div>
            </div>
        </>
    )
}