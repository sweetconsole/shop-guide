import { type FC } from "react"
import { motion } from "framer-motion"
import Arrow from "../../assets/images/arrow_down.svg"
import styles from "./PointerToBottom.module.scss"

const PointerToBottom: FC = () => {
	return (
		<motion.div
			className={styles.pointer}
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ delay: 1.6, duration: 0.4 }}
			viewport={{ once: true }}
		>
			<p className={styles.text}>вниз</p>
			<img className={styles.arrow} src={Arrow} alt="" />
			<p className={styles.text}>вниз</p>
		</motion.div>
	)
}

export default PointerToBottom
