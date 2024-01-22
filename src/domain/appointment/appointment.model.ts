

import { Business } from "../business"

import { Service } from "../service"

import { Booking } from "../booking"

export class Appointment {

id: string

time?: string

date?: string

dateCreated: string

dateDeleted: string

dateUpdated: string

businessId: string

business?: Business

serviceId: string

service?: Service

bookings?: Booking[]

}
