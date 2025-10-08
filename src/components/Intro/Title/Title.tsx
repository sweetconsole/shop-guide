import { type FC } from "react"
import { motion } from "framer-motion"
import styles from "./Title.module.scss"

const Title: FC = () => {
	return (
		<div className={styles.block}>
			<motion.div
				className={styles.note}
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ delay: 0.8, duration: 0.4 }}
				viewport={{ once: true }}
			>
				<p className={styles.note_text}>Только лучшие акции</p>
			</motion.div>
			<h1 className={styles.title}>
				Shop
				<span className={styles.title_highlighting}>Guide</span>
			</h1>
		</div>
	)
}

export default Title
