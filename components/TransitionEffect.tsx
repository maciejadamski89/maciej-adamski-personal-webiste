import {motion} from "framer-motion";

const TransitionEffect = () => {
	return (
		<>
			<motion.div
				className="fixed top-0 bottom-0 z-30 w-screen h-screen bg-indigo-950 right-full"
				initial={{x: "100%", width: "100%"}}
				animate={{x: "0%", width: "0%"}}
				exit={{x: ["0%", "100%"], width: ["0%", "100%"]}}
				transition={{duration: 0.8, ease: "easeInOut"}}
			/>
			<motion.div
				className="fixed top-0 bottom-0 z-20 w-screen h-screen bg-indigo-900/50 right-full backdrop-blur-sm"
				initial={{x: "100%", width: "100%"}}
				animate={{x: "0%", width: "0%"}}
				transition={{delay: 0.2, duration: 0.8, ease: "easeInOut"}}
			/>
			<motion.div
				className="fixed top-0 bottom-0 z-10 w-screen h-screen bg-indigo-800/40 right-full backdrop-blur-sm"
				initial={{x: "100%", width: "100%"}}
				animate={{x: "0%", width: "0%"}}
				transition={{delay: 0.4, duration: 0.8, ease: "easeInOut"}}
			/>
		</>
	);
};

export default TransitionEffect;
