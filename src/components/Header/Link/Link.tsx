import { type FC } from "react"
import { motion } from "framer-motion"
import styles from "./Link.module.scss"

interface Props {
	link: string
	icon: string
	title: string
	index: number
	initialDelay: number
	changeStepDelay: number
	durationAnimation: number
	key: number
}

const Link: FC<Props> = ({
	link,
	icon,
	title,
	index,
	initialDelay,
	changeStepDelay,
	durationAnimation
}) => {
	return (
		<motion.a
			className={styles.link}
			href={link}
			target="_blank"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{
				delay: initialDelay + changeStepDelay * index,
				duration: durationAnimation
			}}
			viewport={{ once: true }}
		>
			<div className={styles.border}></div>
			<img className={styles.icon} src={icon} alt={title} />
		</motion.a>
	)
}

export default Link
