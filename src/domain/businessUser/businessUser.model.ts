

import { Business } from "../business"

import { BusinessUserRole } from "../businessUserRole"

export class BusinessUser {

id: string

email: string

name?: string

pictureUrl?: string

status: string

password?: string

dateCreated: string

dateUpdated: string

dateDeleted: string

businesssAsOwner?: Business[]

businessUserRolesAsUser?: BusinessUserRole[]

}
