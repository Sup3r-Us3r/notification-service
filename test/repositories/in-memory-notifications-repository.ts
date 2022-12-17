import { NotificationsRepository } from '@application/repositories/notifications-repository';
import { Notification } from '@application/entities/notification';

class InMemoryNotificationsRepository implements NotificationsRepository {
  public notifications: Notification[] = [];

  async findById(notificationId: string): Promise<Notification | null> {
    const notification = this.notifications.find(
      (item) => item.id === notificationId,
    );

    return notification ?? null;
  }

  async findManyByRecipientId(recipientId: string): Promise<Notification[]> {
    const notifications = this.notifications.filter(
      (notification) => notification.recipientId === recipientId,
    );

    return notifications;
  }

  async countManyByRecipientId(recipientId: string): Promise<number> {
    const notifications = this.notifications.filter(
      (notification) => notification.recipientId === recipientId,
    );

    return notifications.length;
  }

  async create(notification: Notification) {
    this.notifications.push(notification);
  }

  async save(notification: Notification): Promise<void> {
    const notificationIndex = this.notifications.findIndex(
      (item) => item.id === notification.id,
    );

    if (notificationIndex >= 0) {
      this.notifications[notificationIndex] = notification;
    }
  }
}

export { InMemoryNotificationsRepository };
