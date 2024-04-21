import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ApiConfigService {
  constructor(private configService: ConfigService) {}

  get appConfig() {
    return {
      port: this.configService.get<string>('PORT'),
      env: this.configService.get<string>('NODE_ENV'),
      documentationEnabled: this.configService.get<boolean>(
        'ENABLE_DOCUMENTATION',
      ),
    };
  }
}
