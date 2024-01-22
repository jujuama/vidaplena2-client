

import { BusinessUser } from "../businessUser"

import { Service } from "../service"

import { Appointment } from "../appointment"

import { Favorite } from "../favorite"

import { BusinessUserRole } from "../businessUserRole"

export class Business {

id: string

name?: string

city?: string

type?: string

dateCreated: string

dateDeleted: string

dateUpdated: string

ownerId: string

owner?: BusinessUser

services?: Service[]

appointments?: Appointment[]

favorites?: Favorite[]

businessUserRoles?: BusinessUserRole[]

}
