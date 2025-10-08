import { type FC } from "react"
import { motion } from "framer-motion"
import Phone from "../../assets/images/phone1.png"
import Title from "./Title/Title.tsx"
import Download from "./Download/Download.tsx"
import styles from "./Intro.module.scss"

const Intro: FC = () => {
	return (
		<div className={styles.block}>
			<motion.div
				className={styles.info}
				initial={{ x: -100, opacity: 0 }}
				whileInView={{ x: 0, opacity: 1 }}
				transition={{ delay: 0.2, duration: 0.4 }}
				viewport={{ once: true }}
			>
				<Title />
				<Download />
			</motion.div>

			<motion.img
				className={styles.phone}
				src={Phone}
				alt=""
				initial={{ y: 100, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				transition={{ delay: 1.4, duration: 0.4 }}
				viewport={{ once: true }}
			/>
		</div>
	)
}

export default Intro
