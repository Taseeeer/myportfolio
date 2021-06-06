import styles from '../styles/Home.module.css';
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import { GoMarkGithub } from "react-icons/go";
import { BsSun } from "react-icons/bs";
import { BsMoon } from "react-icons/bs";
import { useEffect, useState } from 'react';
import Line from './line';

export default function Workings() {


    const [theme, setTheme] = useState(false);
    useEffect(() => {
        setTheme(JSON.parse(localStorage.getItem("theme")));
    }, [setTheme]);

    

    const sentence = {hidden: {opacity: 1}, visible: {opacity: 1, transition: {delay: 0.5, staggerChildren: 0.08}}};
    const letter = { hidden: {opacity: 0, y:50}, visible: {opacity: 1, y:0} };


    const worked = "I've worked with JavaScript for a long while now.";
    const workedreact = "Then I moved to React. Totally loving it!";
    const explore = "And now exploring it's frameworks, I've worked with gatsby already,";
    const chose = "that's why I chose NextJs for this portfolio website.";
    const csninja = "I've created a full stack application using Gatsby and Sanity, the link to which will be give below.";
    const githublink = `Check out my github profile for other projects, I've pushed some simple projects in there.`;




    return (
        <>

        <div className={styles.outerworking} style={{backgroundColor: `${theme ? "#22262e" : ""}`, color: `${theme ? "whitesmoke" : ""}`, transition: "0.5s ease"}}>
            <div className={styles.flexone} 
            style={{backgroundColor: `${theme ? "#22262e" : ""}`, color: `${theme ? "whitesmoke" : ""}`, transition: "0.5s ease"}}> 
                <div className={styles.theme}> 
                    {theme ? <BsSun onClick={() => setTheme(!theme)} /> : <BsMoon onClick={() => setTheme(!theme)} />}
                </div> 
            </div>

            <Link href="/">
                <button className={styles.backbutton}><FaArrowLeft /></button>
            </Link>
            <div className={styles.innerworking}>
                <h2 className={styles.iwh2} style={{margin: "5rem 0 0 0rem"}}>
                <motion.span  animate="visible" initial="hidden" 
                        variants={sentence}>
                            {/* I've intended to showcase this website as a minimal one. */}
                            {worked.split("").map((char, index) => {
                                return (
                                    <motion.span key={char + "-" + index} variants={letter}>{char}</motion.span>
                                )
                            })}
                </motion.span>
                </h2>
                <h2 className={styles.iwh2} style={{margin: "-1rem 0rem"}}>
                <motion.span animate="visible" initial="hidden" 
                        variants={sentence}>
                            {workedreact.split("").map((char, index) => {
                                return (
                                    <motion.span key={char + "-" + index} variants={letter}>{char}</motion.span>
                                )
                            })}
                </motion.span>
                </h2>
                <h2 className={styles.iwh2} style={{margin: "-0.7rem 0rem"}}>
                <motion.span animate="visible" initial="hidden" 
                        variants={sentence}>
                            {explore.split("").map((char, index) => {
                                return (
                                    <motion.span key={char + "-" + index} variants={letter}>{char}</motion.span>
                                )
                            })}
                </motion.span>
                </h2>
                <h2 className={styles.iwh2} style={{margin: "-0.7rem 0rem"}}>
                <motion.span animate="visible" initial="hidden" 
                        variants={sentence}>
                            {chose.split("").map((char, index) => {
                                return (
                                    <motion.span key={char + "-" + index} variants={letter}>{char}</motion.span>
                                )
                            })}
                </motion.span>
                </h2>
                <h2 className={styles.iwh2} style={{margin: "-0.7rem 0rem"}}>
                <motion.span animate="visible" initial="hidden" 
                        variants={sentence}>
                            {csninja.split("").map((char, index) => {
                                return (
                                    <motion.span key={char + "-" + index} variants={letter}>{char}</motion.span>
                                )
                            })}
                </motion.span>
                </h2>
                <a href="https://www.cs-ninja.com">
                <motion.h2 style={{backgroundImage: `${theme ? "linear-gradient(to right, transparent, transparent)": ""}`, color: `${theme ? "whitesmoke" : ""}`}} className={styles.csninja}>
                    cs-ninja.com
                </motion.h2>
                </a>
                <h2 className={styles.iwh2} style={{margin: "-0.7rem 0rem"}}>
                <motion.span animate="visible" initial="hidden" 
                        variants={sentence}>
                            {githublink.split("").map((char, index) => {
                                return (
                                    <motion.span key={char + "-" + index} variants={letter}>{char}</motion.span>
                                )
                            })}
                </motion.span>
                </h2>
                <Link href="https://www.github.com/taseeeer">
                    <h1 style={{margin: "-0.7rem 0"}} className={styles.githublink}><GoMarkGithub /></h1>
                </Link>
                <br />
            </div>
        </div>
        <footer className={styles.footer}>
            <h2 className={styles.rights}>Signing off, © 2021.</h2>
        </footer>
        </>
    );
};
