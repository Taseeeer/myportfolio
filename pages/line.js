import { motion } from "framer-motion";
import styled from "styled-components";

export default function Line() {
    return (
        <ForLine>
            <svg width="783" height="6" viewBox="0 0 783 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path initial={{pathLength: 0, pathOffset: 1}} animate={{pathLength: 1, pathOffset: 0}}
             transition={{duration: 1}}
             d="M0 3H708H783" stroke="#FF0000" stroke-width="5"/>
            </svg>
        </ForLine>
    );
};

const ForLine = styled.div`
    svg {
        width: 100%;
    }
`;