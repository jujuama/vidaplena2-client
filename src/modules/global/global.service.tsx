import { MrbToastContext } from '@/designSystem'
import { AuthorizationApi } from '@/domain/authorization'
import { NotificationApi } from '@/domain/notification'
import { CoreStoreContext } from '../../core/store/store'

export namespace GlobalService {
  type InitialiseStoreOptions = {
    toast: MrbToastContext
    store: CoreStoreContext
  }

  export const initialiseStore = async ({
    toast,
    store,
  }: InitialiseStoreOptions): Promise<void> => {
    // intialise your store here

    AuthorizationApi.getPermissions()
      .then(({ roles }) => store.setRoles(roles))
      .catch(() => {})

    NotificationApi.findManyByMe()
      .then(notifications => store.setNotifications(notifications))
      .catch(() => {})
  }

  type CleanOptions = {
    store: CoreStoreContext
  }

  export const cleanStore = async ({ store }: CleanOptions): Promise<void> => {
    // clean your store here
    store.setRoles([])
  }
}
