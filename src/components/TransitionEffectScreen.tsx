import React from "react";
import {motion} from "framer-motion";

const TransitionEffectScreen = () => {
    return (
        <>
            <motion.div
                className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#65A69A]"
                initial={{x: "100%", width: "100%"}}
                animate={{x: "0%", width: "100%"}}
                transition={{duration: 0.8, ease: "easeInOut"}}
            />
            <motion.div
                className="fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-white"
                initial={{x: "100%", width: "100%"}}
                animate={{x: "0%", width: "100%"}}
                transition={{delay: 0.2, duration: 0.8, ease: "easeInOut"}}
            />
            <motion.div
                className="fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-[#A9D9D4]"
                initial={{x: "100%", width: "100%"}}
                animate={{x: "0%", width: "100%"}}
                transition={{delay: 0.4, duration: 0.8, ease: "easeInOut"}}
            />
        </>
    );
};

export default TransitionEffectScreen;
