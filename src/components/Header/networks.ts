import LogoVK from "../../assets/images/icon_vk.svg"
import LogoTwitter from "../../assets/images/icon_tw.svg"
import LogoInstagram from "../../assets/images/icon_ig.svg"
import LogoFacebook from "../../assets/images/icon_fb.svg"
import LogoOK from "../../assets/images/icon_ok.svg"

export type Network = {
	index: number
	title: string
	icon: string
	link: string
}

export const networks: Array<Network> = [
	{
		index: 0,
		title: "VK",
		icon: LogoVK,
		link: "https://youtu.be/h8jvneKLAHY?t=15"
	},
	{
		index: 1,
		title: "Twitter",
		icon: LogoTwitter,
		link: "https://youtu.be/h8jvneKLAHY?t=15"
	},
	{
		index: 2,
		title: "Instagram",
		icon: LogoInstagram,
		link: "https://youtu.be/h8jvneKLAHY?t=15"
	},
	{
		index: 3,
		title: "Facebook",
		icon: LogoFacebook,
		link: "https://youtu.be/h8jvneKLAHY?t=15"
	},
	{
		index: 4,
		title: "OK",
		icon: LogoOK,
		link: "https://youtu.be/h8jvneKLAHY?t=15"
	}
]
