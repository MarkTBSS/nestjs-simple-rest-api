import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getAiya(): string {
    return 'Handsome';
  }

  getLisa(): string {
    return 'Narak';
  }

  getOut(): string {
    return 'Get Out!!';
  }
}
