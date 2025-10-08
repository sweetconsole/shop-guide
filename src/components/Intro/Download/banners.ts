import DownloadIOsBanner from "../../../assets/images/download_ios.svg"
import DownloadAndroidBanner from "../../../assets/images/download_android.svg"

type Banner = {
	link: string
	image: string
	delay: number
}

export const banners: Array<Banner> = [
	{
		link: "https://www.youtube.com/watch?v=b4XpMTUlorc",
		image: DownloadIOsBanner,
		delay: 1.2
	},
	{
		link: "https://www.youtube.com/watch?v=CBCC04zBYjc",
		image: DownloadAndroidBanner,
		delay: 1.4
	}
]
