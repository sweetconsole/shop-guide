import LikeIcon from "../../assets/images/like.png"
import GeoIcon from "../../assets/images/geo.png"
import SheetIcon from "../../assets/images/sheet.png"
import BellIcon from "../../assets/images/bell.png"
import type { Feature } from "./features.types.ts"

export const features: Array<Feature> = [
	{
		icon: LikeIcon,
		title: "Только лучшие",
		description: "Всегда актуальные акции у вас в телефоне",
		motionInitial: { x: -100, opacity: 0 },
		motionWhileInView: { x: 0, opacity: 1 }
	},
	{
		icon: GeoIcon,
		title: "Всегда рядом",
		description: "Находите ближайшие акции на карте рядом с вами",
		motionInitial: { y: 100, opacity: 0 },
		motionWhileInView: { y: 0, opacity: 1 }
	},
	{
		icon: SheetIcon,
		title: "Уведомления",
		description:
			"Подписывайтесь только на то, что вас интересует и всегда будьте в курсе новых акций.",
		motionInitial: { y: 100, opacity: 0 },
		motionWhileInView: { y: 0, opacity: 1 }
	},
	{
		icon: BellIcon,
		title: "Каталог",
		description:
			"Огромный каталог с информацией о магазинах, брендах и ТЦ всегда под рукой.",
		motionInitial: { x: 100, opacity: 0 },
		motionWhileInView: { x: 0, opacity: 1 }
	}
]
