import { type FC } from "react"
import FeedbackIcon from "../../assets/images/feedback.svg"
import { links } from "./footer.data.ts"
import styles from "./Footer.module.scss"

const Footer: FC = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.block}>
					<p className={styles.copyright}>2016 © shopguide </p>

					<nav className={styles.navigation}>
						{links.map((link, index) => (
							<a
								className={styles.link}
								href={link.url}
								target="_blank"
								key={index}
							>
								{link.title}
							</a>
						))}
					</nav>
				</div>

				<a
					className={styles.feedback_link}
					href="https://yaroslavl.hh.ru/resume/00222663ff0e52efc20039ed1f72694c435445"
					target="_blank"
				>
					<img className={styles.feedback_icon} src={FeedbackIcon} alt="" />
					<p className={styles.feedback_text}>Связаться с нами</p>
				</a>
			</div>
		</footer>
	)
}

export default Footer
