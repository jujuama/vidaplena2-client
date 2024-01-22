import { useHttpAction } from '@/core/http/http.action.hook'
import { useCoreStore } from '@/core/store'
import { Notification, NotificationApi } from '@/domain/notification'
import { useRouter } from 'next/navigation'

type ReturnType = {
  onDelete: (notification: Notification) => void
  onClick: (notification: Notification) => void
}

export const useNotificationToast = (): ReturnType => {
  const router = useRouter()

  const { notifications, setNotifications } = useCoreStore()

  const actionDelete = useHttpAction()

  const handleDelete = (notification: Notification) => {
    actionDelete.run(() =>
      NotificationApi.deleteOneByMe(notification.id)
        .catch(() => {})
        .then(() => {
          const notificationsUpdated = [...notifications]

          const index = notifications.findIndex(
            item => item.id === notification.id,
          )

          if (index > -1) {
            notificationsUpdated.splice(index, 1)
          }

          setNotifications(notificationsUpdated)
        })
        .catch(() => {}),
    )
  }

  const handleClick = (notification: Notification) => {
    if (notification.redirectUrl) {
      router.push(notification.redirectUrl)

      handleDelete(notification)
    }
  }

  return { onDelete: handleDelete, onClick: handleClick }
}
