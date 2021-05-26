import icon_twitter from './icons/twitter'
import icon_discord from './icons/discord_new'
import icon_rarible from './icons/rarible'
import icon_opensea from './icons/opensea'
import icon_email from './icons/email'

import type { SocialLink } from '@/types'
import socialLinks from './socials.json'

const transform = {
	transform: {
		scale: 0.65,
		translate: {
			x: 10,
			y: 10,
		},
	},
}

export const twitter: SocialLink = {
	...socialLinks.twitter,
	...icon_twitter,
	...transform,
}

// TODO: show our opensea collection
// export const opensea: SocialLink = {
// 	...socialLinks.opensea,
// 	...icon_opensea,
// 	transform: {
// 		...transform.transform,
// 		scale: 0.5,
// 		translate: {
// 			x: 10.5,
// 			y: 9.5,
// 		},
// 	},
// }

export const discord: SocialLink = {
	...socialLinks.discord,
	...icon_discord,
	transform: {
		...transform.transform,
		scale: 0.25,
		translate: {
			x: 9,
			y: 11,
		},
	},
}

export const email: SocialLink = {
	service: 'email',
	...socialLinks.email,
	...icon_email,
	transform: {
		...transform.transform,
		translate: {
			x: 7.5,
			y: 8,
		},
	},
}

export const rarible: SocialLink = {
	...socialLinks.rarible,
	...icon_rarible,
	transform: {
		...transform.transform,
		translate: {
			x: 5,
			y: 5,
		},
	},
}

export const socials: SocialLink[] = [
	//
	email,
	twitter,
	discord,
	rarible,
	// opensea,
]

interface SocialPersonals {
	[key: string]: SocialLink[]
}

export const personals: SocialPersonals = {}

for (const person in socialLinks.personals) {
	const socials = socialLinks.personals[person].map((value) => ({
		...value,
		...icon_twitter,
		...transform,
	}))
	personals[person] = socials
}
