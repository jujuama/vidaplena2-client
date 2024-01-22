

import { Notification } from "../notification"

export enum UserStatus {
  CREATED = 'CREATED',
  VERIFIED = 'VERIFIED',
}
export class User {
  id: string

  email: string

  status: UserStatus

  name: string

  pictureUrl: string

  password: string

  dateCreated: string

  dateUpdated: string

  notifications?: Notification[]

}
