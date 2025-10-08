import { type FC, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import Phone from "../../assets/images/phone2.png"
import ChangeSlide from "./ChangSlide.tsx"
import { chapters } from "./info.ts"
import styles from "./Info.module.scss"

const Info: FC = () => {
	const [selectedId, setSelectedId] = useState(1)

	return (
		<section className={styles.block}>
			<div className={styles.container}>
				<div className={styles.titles}>
					{chapters.map((chapter, index) => (
						<p
							className={
								selectedId == index
									? [styles.title, styles.title_selected].join(" ")
									: styles.title
							}
							onClick={() => setSelectedId(index)}
							key={index}
						>
							{chapter.title}
						</p>
					))}
				</div>

				<div className={styles.chapter_text}>
					{chapters.map((chapter, index) => (
						<div
							className={
								selectedId == index
									? [styles.description, styles.description_selected].join(" ")
									: styles.description
							}
							key={index}
						>
							{chapter.description.map((text, key) => (
								<p className={styles.text} key={key}>
									{text}
								</p>
							))}
						</div>
					))}
				</div>

				<div className={styles.phone}>
					<img className={styles.phone_image} src={Phone} alt="" />

					<div className={styles.phone_display_field}>
						<Swiper
							className={styles.phone_display}
							initialSlide={selectedId}
							onSlideChange={swiper => setSelectedId(swiper.activeIndex)}
						>
							<ChangeSlide position={selectedId} />
							{chapters.map((chapter, index) => (
								<SwiperSlide key={index}>
									<img
										className={styles.phone_display}
										src={chapter.display}
										alt=""
									/>
								</SwiperSlide>
							))}
						</Swiper>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Info
