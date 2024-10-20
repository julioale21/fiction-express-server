import { Module } from '@nestjs/common';
import { BooksModule } from './books/books.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { HealthController } from './health/health.controller';

@Module({
  imports: [ConfigModule.forRoot(), BooksModule, AuthModule],
  controllers: [HealthController],
  providers: [],
})
export class AppModule {}
