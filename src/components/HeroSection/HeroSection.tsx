import { type FC } from "react"

import styles from "./HeroSection.module.scss"
import { Header, Intro, PointerToBottom } from "../index.ts"

const HeroSection: FC = () => {
	return (
		<section className={styles.block}>
			<Header />
			<Intro />
			<PointerToBottom />
		</section>
	)
}

export default HeroSection
