

import { Appointment } from "../appointment"

import { ClientUser } from "../clientUser"

export class Booking {

id: string

status?: string

dateCreated: string

dateDeleted: string

dateUpdated: string

appointmentId: string

appointment?: Appointment

userId: string

user?: ClientUser

}
