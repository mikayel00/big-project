import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ApiConfigService {
  constructor(private configService: ConfigService) {}

  get appConfig() {
    return {
      port: this.configService.get('PORT'),
    };
  }
}
