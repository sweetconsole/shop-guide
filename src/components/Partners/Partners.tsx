import { type FC } from "react"
import PartnersSwiper from "./PartnersSwiper/PartnersSwiper.tsx"
import styles from "./Partners.module.scss"

const Partners: FC = () => {
	return (
		<section className={styles.block}>
			<h2 className={styles.title}>Наши партнёры</h2>

			<div className={styles.partners_block}>
				<PartnersSwiper />
			</div>

			<div className={styles.become_partners}>
				<p className={styles.become_partners_text}>Хотите стать партнёром?</p>
				<p className={styles.become_partners_text}>
					Напишите нам и про ваши акции узнают все.
				</p>

				<button className={styles.become_partners_button}>
					Стать партнером
				</button>
			</div>
		</section>
	)
}

export default Partners
