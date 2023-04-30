import type { CSS } from '@/ui'
export type { CSS }

export const baseColors = [
	'red',
	'orange',
	'yellow',
	'green',
	'blue',
	'purple',
	'grey',
] as const
export type Color = typeof baseColors[number]

export type SocialLink = {
	url: string
	username: string
	title: string
	hex: string
	hue: string
	path: string
	transform: {
		scale: number
		translate: {
			x: number
			y: number
		}
	}
	look?: string
}
