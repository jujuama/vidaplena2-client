

import { Business } from "../business"

import { BusinessUser } from "../businessUser"

export class BusinessUserRole {

id: string

role?: string

dateCreated: string

dateDeleted: string

dateUpdated: string

businessId: string

business?: Business

userId: string

user?: BusinessUser

}
