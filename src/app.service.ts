import { Injectable } from '@nestjs/common';
import { AppDataSource } from './data-source';

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

AppDataSource.initialize()
    .then(() => {
        // here you can start to work with your database
    })
    .catch((error) => console.log(error))
