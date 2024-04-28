import { Global, Module } from '@nestjs/common';
import { ApiConfigService } from './services/api-config.service';
import { PrismaService } from './services/database.service';

@Global()
@Module({
  imports: [],
  controllers: [],
  providers: [ApiConfigService, PrismaService],
})
export class SharedModule {}
