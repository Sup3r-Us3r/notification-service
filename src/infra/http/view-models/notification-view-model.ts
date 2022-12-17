import { Notification } from '@application/entities/notification';

class NotificationViewModel {
  static toHTTP(notification: Notification) {
    return {
      id: notification.id,
      recipientId: notification.recipientId,
      category: notification.category,
      content: notification.content.value,
    };
  }
}

export { NotificationViewModel };
