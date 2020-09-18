import { Module } from '@nestjs/common';
import { RequestHandlerController } from './request-handler.controller';
import { RequestHandlerService } from './request-handler.service';

@Module({
  controllers: [RequestHandlerController],
  providers: [RequestHandlerService],
  exports: [RequestHandlerService],
})
export class RequestHandlerModule {}
