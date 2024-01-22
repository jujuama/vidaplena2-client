

import { ClientUser } from "../clientUser"

import { Business } from "../business"

export class Favorite {

id: string

dateCreated: string

dateDeleted: string

dateUpdated: string

userId: string

user?: ClientUser

businessId: string

business?: Business

}
