import { NestFactory } from '@nestjs/core';
import { ProvidersModule } from './providers.module';

async function bootstrap() {
  const app = await NestFactory.create(ProvidersModule);
  await app.listen(3000);
}
bootstrap();
