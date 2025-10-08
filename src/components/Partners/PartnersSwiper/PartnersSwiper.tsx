import { type FC, useRef } from "react"
import { Swiper as SwiperType } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import ArrowLeft from "../../../assets/images/arrow_left.svg"
import ArrowRight from "../../../assets/images/arrow_right.svg"
import { partners } from "../partners.data.ts"
import styles from "./PartnersSwiper.module.scss"

const PartnersSwiper: FC = () => {
	const swiperRef = useRef<SwiperType>(null)

	return (
		<div className={styles.block}>
			<button
				className={styles.partners_button}
				onClick={() => swiperRef.current?.slidePrev()}
			>
				<img className={styles.partners_button_arrow} src={ArrowLeft} alt="" />
			</button>

			<Swiper
				className={styles.partners}
				spaceBetween={44}
				breakpoints={{
					320: {
						slidesPerView: 3
					},
					768: {
						slidesPerView: 7
					}
				}}
				loop={true}
				onBeforeInit={swiper => {
					swiperRef.current = swiper
				}}
			>
				{partners.map((partner, index) => (
					<SwiperSlide className={styles.partner} key={index}>
						<img
							className={styles.partner_logo}
							src={partner.icon}
							alt={partner.title}
						/>
					</SwiperSlide>
				))}
			</Swiper>

			<button
				className={styles.partners_button}
				onClick={() => swiperRef.current?.slideNext()}
			>
				<img className={styles.partners_button_arrow} src={ArrowRight} alt="" />
			</button>
		</div>
	)
}

export default PartnersSwiper
