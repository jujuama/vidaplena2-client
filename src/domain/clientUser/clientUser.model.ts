

import { Notification } from "../notification"

import { Profile } from "../profile"

import { Booking } from "../booking"

import { Favorite } from "../favorite"

export class ClientUser {

id: string

email: string

name?: string

pictureUrl?: string

status: string

password?: string

dateCreated: string

dateUpdated: string

dateDeleted: string

notificationsAsUser?: Notification[]

profilesAsUser?: Profile[]

bookingsAsUser?: Booking[]

favoritesAsUser?: Favorite[]

}
