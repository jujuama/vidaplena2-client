import { useSocket } from '@/core/socket'
import { Notification } from './notification.model'

export const useNotificationCreated = (
  callback: (notification: Notification) => void,
) => {
  useSocket('notification.created', callback)
}
