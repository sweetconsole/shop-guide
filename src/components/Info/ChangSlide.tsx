import { type FC, useEffect } from "react"
import { useSwiper } from "swiper/react"

interface Props {
	position: number
}

const ChangeSlide: FC<Props> = ({ position }) => {
	const swiper = useSwiper()

	useEffect(() => {
		if (swiper) {
			swiper.slideTo(position)
		}
	}, [swiper, position])
	return null
}

export default ChangeSlide
