import { type FC } from "react"
import { motion } from "framer-motion"
import { useMediaQuery } from "../../hooks/useMediaQuery.ts"
import { features } from "./features.data.ts"
import styles from "./Features.module.scss"

const Features: FC = () => {
	const isMobile = useMediaQuery("(max-width: 1300px)")

	return (
		<section className={styles.block}>
			<ul className={styles.features}>
				{features.map((feature, index) => (
					<motion.li
						className={styles.feature}
						key={index}
						initial={isMobile ? undefined : { ...feature.motionInitial }}
						whileInView={
							isMobile ? undefined : { ...feature.motionWhileInView }
						}
						transition={{ delay: 0.4, duration: 0.4 }}
						viewport={{ once: true, amount: 0.2 }}
					>
						<img className={styles.feature_icon} src={feature.icon} alt="" />
						<h2 className={styles.feature_title}>{feature.title}</h2>
						<p className={styles.feature_description}>{feature.description}</p>
					</motion.li>
				))}
			</ul>
		</section>
	)
}

export default Features
