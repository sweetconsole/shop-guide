import { type FC } from "react"
import { motion } from "framer-motion"
import styles from "./Download.module.scss"
import { banners } from "./banners.ts"

const Download: FC = () => {
	return (
		<div className={styles.block}>
			<motion.div
				className={styles.title}
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ delay: 1.0, duration: 0.4 }}
				viewport={{ once: true }}
			>
				<div className={styles.title_line}></div>
				<p className={styles.title_text}>загрузить</p>
				<div className={styles.title_line}></div>
			</motion.div>

			<div className={styles.banners}>
				{banners.map((banner, index) => (
					<motion.a
						className={styles.link}
						href={banner.link}
						target="_blank"
						key={index}
						initial={{ y: 100, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						transition={{ delay: banner.delay, duration: 0.4 }}
						viewport={{ once: true }}
					>
						<img className={styles.download_banner} src={banner.image} alt="" />
					</motion.a>
				))}
			</div>
		</div>
	)
}

export default Download
