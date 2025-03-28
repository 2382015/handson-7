import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SongsModule } from './songs/songs.module';
import { APP_GUARD } from '@nestjs/core';
import { LoggerMiddLeware } from './src/logger.middleware';

@Module({
  imports: [SongsModule],
  controllers: [AppController],
  providers: [{
    provide: APP_GUARD,
    useClass: Autguard,
  },
    AppService,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddLeware).forRoutes('songs');
  }
}
