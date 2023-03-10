import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '../repositories/notifications-repository';
import { NotificationNotFound } from './errors/notification-not-found';

interface ICancelNotificationRequest {
  notificationId: string;
}

type CancelNotificationResponse = void;

@Injectable()
class CancelNotification {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(
    request: ICancelNotificationRequest,
  ): Promise<CancelNotificationResponse> {
    const { notificationId } = request;

    const notification = await this.notificationsRepository.findById(
      notificationId,
    );

    if (!notification) {
      throw new NotificationNotFound();
    }

    notification.cancel();

    await this.notificationsRepository.save(notification);
  }
}

export { CancelNotification };
