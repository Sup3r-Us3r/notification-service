import { IsNotEmpty, IsUUID, Length } from 'class-validator';

class CreateNotificationBody {
  @IsUUID()
  @IsNotEmpty()
  recipientId: string;

  @Length(5, 240)
  @IsNotEmpty()
  content: string;

  @IsNotEmpty()
  category: string;
}

export { CreateNotificationBody };
