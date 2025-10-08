import { type FC } from "react"
import { motion } from "framer-motion"
import { networks } from "./networks.ts"
import Link from "./Link/Link.tsx"
import styles from "./Header.module.scss"

const Header: FC = () => {
	const initialDelay: number = 0.2
	const changeStepDelay: number = 0.2
	const durationAnimation: number = 0.4

	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<nav className={styles.networks}>
					{networks.map(network => (
						<Link
							initialDelay={initialDelay}
							changeStepDelay={changeStepDelay}
							durationAnimation={durationAnimation}
							key={network.index}
							{...network}
						/>
					))}
				</nav>

				<motion.button
					className={styles.become_partner}
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{
						delay: initialDelay + changeStepDelay * networks.length,
						duration: durationAnimation
					}}
					viewport={{ once: true }}
				>
					Стать партнером
				</motion.button>
			</div>
		</header>
	)
}

export default Header
