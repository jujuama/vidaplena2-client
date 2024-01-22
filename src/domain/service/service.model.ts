

import { Business } from "../business"

import { Appointment } from "../appointment"

export class Service {

id: string

name?: string

description?: string

dateCreated: string

dateDeleted: string

dateUpdated: string

businessId: string

business?: Business

appointments?: Appointment[]

}
