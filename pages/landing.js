import styles from '../styles/Home.module.css'
import { GoMarkGithub } from "react-icons/go";
import { FaFacebook } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { BsSun } from "react-icons/bs";
import { BsMoon } from "react-icons/bs";
import { createContext, useEffect, useState } from 'react';
import { motion } from "framer-motion";
import Link from "next/link";
import Line from "./line";

export const forthere = createContext();

export default function Landing() {

    const [theme, setTheme] = useState(false);

    useEffect(() => {
        setTheme(JSON.parse(localStorage.getItem("theme")));
    }, [setTheme]);

    useEffect(() => {
        // setTheme(window.localStorage.getItem("theme"));
        localStorage.setItem("theme", JSON.stringify(theme));
    }, [theme]);


    const intend = "I've intended to showcase this website as a minimal one.";
    const tried = "Or at least I tried.";
    const stories = `I like to play games, code random stuff & read stories from Hacker New.`;
    const animations = "And thanks to Framer-Motion for making these animations possible.";

    const sentence = {hidden: {opacity: 1}, visible: {opacity: 1, transition: {delay: 0.5, staggerChildren: 0.08}}};
    const letter = { hidden: {opacity: 0, y:50}, visible: {opacity: 1, y:0} };



    return (
        <>
        <div className={styles.outermost}>
            <div className={styles.flexone} 
            style={{backgroundColor: `${theme ? "#22262e" : ""}`, color: `${theme ? "whitesmoke" : ""}`, transition: "0.5s ease"}}> 
                <div className={styles.theme}> 
                    {theme ? <BsSun 
                    onClick={() => setTheme(!theme)} /> 
                    : <BsMoon onClick={() => setTheme(!theme)} />}
                </div> 
            </div>
            <div className={styles.outercontainer} 
            style={{backgroundColor: `${theme ? "#22262e" : ""}`, color: `${theme ? "whitesmoke" : ""}`, transition: "0.5s ease"}}>
                <div className={styles.flexintwo}>
                    <div>
                        <h2 className={styles.myintro}>
                        Hi there <span className={styles.hand}>👋</span> 
                        <span className={styles.imcalled}>I am called</span> 
                        <motion.span 
                        className={styles.name} animate={{opacity: 1, transition: {duration: 2}}} initial={{opacity: 0}}> 
                            Syed Taseer Shah
                        </motion.span>
                        <span className={styles.dot}>
                            {theme ? "🔴" : "⚫"} 
                        </span>
                        </h2>
                    </div>

                    <p className={styles.des}>
                        <motion.span animate="visible" initial="hidden" 
                        variants={sentence}>
                            {/* I've intended to showcase this website as a minimal one. */}
                            {intend.split("").map((char, index) => {
                                return (
                                    <motion.span key={char + "-" + index} variants={letter}>{char}</motion.span>
                                )
                            })}
                        </motion.span>
                        <br />
                        <motion.span animate="visible" initial="hidden" 
                        variants={sentence}>
                            {/* I've intended to showcase this website as a minimal one. */}
                            {tried.split("").map((char, index) => {
                                return (
                                    <motion.span key={char + "-" + index} variants={letter}>{char}</motion.span>
                                )
                            })}
                        </motion.span>
                        {/* <motion.span className={styles.des2} animate={{opacity: 1, transition: {duration:6}}} initial={{opacity:0}}> 
                            Or atleast tried.
                        </motion.span> */}
                        <br />
                        <motion.span animate={{opacity: 1, transition: {duration:7}}} initial={{opacity:0}}>I am 22 years old software engineering student using&nbsp; 
                            <span className={styles.r}> <FaReact /> </span> as has blade.
                        </motion.span>
                        <br />
                        <motion.span styles={{display: "inline"}} animate="visible" initial="hidden" 
                        variants={sentence}>
                            {/* I've intended to showcase this website as a minimal one. */}
                            {stories.split("").map((char, index) => {
                                return (
                                    <motion.span key={char + "-" + index} variants={letter}>{char}</motion.span>
                                )
                            })}
                        </motion.span>
                        <br />
                        <motion.span styles={{display: "inline"}} animate="visible" initial="hidden" 
                        variants={sentence}>
                            {/* I've intended to showcase this website as a minimal one. */}
                            {animations.split("").map((char, index) => {
                                return (
                                    <motion.span key={char + "-" + index} variants={letter}>{char}</motion.span>
                                )
                            })}
                        </motion.span>
                        <br />
                        <Link href="/workings">
                            <span 
                                style={{backgroundImage: `${theme ? "linear-gradient(to right, transparent, transparent)": ""}`}} 
                                className={styles.gohere}> 
                                My workings.
                            </span>
                        </Link>
                        <br />
                        <Line />
                    </p>
                </div>

            </div>
            <div className={styles.outercontainer2} 
            style={{backgroundColor: `${theme ? "#22262e" : ""}`, color: `${theme ? "whitesmoke" : ""}`, transition: "0.5s ease"}}>
                <div className={styles.flexinthree}>
                    {/* <div className={styles.thesocials}> <GoMarkGithub /> </div>
                    <div className={styles.thesocials}> <FaFacebook /> </div> */}
                </div>
            </div>
        </div>
        <footer className={styles.footer}>
            <h2 className={styles.rights}>Signing off, © 2021.</h2>
        </footer>
        </>
    )
};
