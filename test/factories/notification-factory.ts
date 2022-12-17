import { Content } from '@application/entities/content';
import {
  INotificationProps,
  Notification,
} from '@application/entities/notification';

type Override = Partial<INotificationProps>;

function makeNotification(override: Override = {}) {
  return new Notification({
    recipientId: 'example-recipient-id',
    category: 'social',
    content: new Content('Nova solicitação de amizade!'),
    ...override,
  });
}

export { makeNotification };
