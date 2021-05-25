export type SocialLink = {
	url: string
	service?: string
	username: string
	title: string
	hex: string
	path: string
	transform: {
		scale: number
		translate: {
			x: number
			y: number
		}
	}
	color?: string
}
