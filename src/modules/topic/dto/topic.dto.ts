import { IsNotEmpty } from 'class-validator';

export class CreateTopicDto {
  @IsNotEmpty()
  content: string;

  images: string[];
}

export class GetTopicsDto {
  recommend?: boolean;
  userId: number;
}
