import type { TargetAndTransition } from "framer-motion"

export type Feature = {
	icon: string
	title: string
	description: string
	motionInitial: TargetAndTransition
	motionWhileInView: TargetAndTransition
}
