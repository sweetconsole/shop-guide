import { type FC } from "react"
import { motion } from "framer-motion"
import PhoneOne from "../../assets/images/phone3_1.png"
import PhoneTwo from "../../assets/images/phone3_2.png"
import styles from "./OurPromotions.module.scss"

const OurPromotions: FC = () => {
	return (
		<section className={styles.block}>
			<div className={styles.container}>
				<div className={styles.info}>
					<motion.h2
						className={styles.title}
						initial={{ x: -100, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{
							delay: 0.4,
							duration: 0.4
						}}
						viewport={{ once: true }}
					>
						Наши Акции
					</motion.h2>
					<motion.p
						className={styles.description}
						initial={{ x: -100, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{
							delay: 0.6,
							duration: 0.4
						}}
						viewport={{ once: true }}
					>
						Каждый день в Москве проходят распродажи. В акциях и скидках дня
						могут принимать участие любые группы товаров. Особенно популярны
						распродажи одежды и обуви, распродажи мебели, распродажи сумок.
					</motion.p>
				</div>

				<div className={styles.phone_left}>
					<motion.img
						src={PhoneOne}
						alt=""
						initial={{ y: 100, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						transition={{
							delay: 1.2,
							duration: 0.4
						}}
						viewport={{ once: true }}
					/>
				</div>

				<div className={styles.phone_right}>
					<motion.img
						src={PhoneTwo}
						alt=""
						initial={{ y: 100, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						transition={{
							delay: 1.0,
							duration: 0.4
						}}
						viewport={{ once: true }}
					/>
				</div>
			</div>
		</section>
	)
}

export default OurPromotions
