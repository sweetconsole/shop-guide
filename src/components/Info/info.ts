import PhoneFavorites from "../../assets/images/phone2_favorites.jpg"
import PhoneActions from "../../assets/images/phone2_actions.jpg"
import PhoneSubscriptions from "../../assets/images/phone2_subsribtions.jpg"
import PhoneMap from "../../assets/images/phone2_map.jpg"
import PhoneList from "../../assets/images/phone2_list.jpg"

export type Chapter = {
	title: string
	description: Array<string>
	display: string
}

export const chapters: Array<Chapter> = [
	{
		title: "Избранное",
		description: [
			"Полную информацию об акции вы всегда получите: бренд, подробное описание, магазины и торговые центры, где проходит.",
			"Возможность также доступна сразу перейти на сайт товара и купить в рамках действующей акции."
		],
		display: PhoneFavorites
	},
	{
		title: "Профиль акции",
		description: [
			"Вы всегда получите полную информацию об акции: подробное описание, бренд, магазины и торговые центры где походит акция.",
			"Также доступна возможность сразу перейти на сайт товара и купить в рамках действующей акции."
		],
		display: PhoneActions
	},
	{
		title: "Подписки",
		description: [
			"Бренд, подробную информацию об акции вы всегда получите: полное описание, магазины и торговые центры, где проходит акция.",
			"Сразу перейти на сайт товара также доступна возможность и купить в рамках действующей акции."
		],
		display: PhoneSubscriptions
	},
	{
		title: "Карта",
		description: [
			"Магазины и торговые центры, где проходит акция, вы всегда получите полную информацию об акции: подробное описание бренда.",
			"Купить в рамках действующей акции также доступна возможность сразу перейти на сайт товара."
		],
		display: PhoneMap
	},
	{
		title: "Моя лента",
		description: [
			"Подробное описание, бренд, магазины и торговые центры, где проходит акция, вы всегда получите полную информацию об акции.",
			"В рамках действующей акции также доступна возможность сразу перейти на сайт товара и купить."
		],
		display: PhoneList
	}
]
