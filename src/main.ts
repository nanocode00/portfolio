import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Serve static files from 'public' directory
  app.useStaticAssets(join(process.cwd(), 'public'));

  // Configure views directory and view engine (Handlebars)
  app.setBaseViewsDir(join(process.cwd(), 'views'));
  app.setViewEngine('hbs');

  // Register partials for modular layout design
  const hbs = require('hbs');
  hbs.registerPartials(join(process.cwd(), 'views', 'partials'));

  // Simple helpers for conditional statements
  hbs.registerHelper('eq', function (a: any, b: any) {
    return a === b;
  });

  // Support JSON / URL-encoded body for possible dynamic requests
  app.use(require('express').json());
  app.use(require('express').urlencoded({ extended: true }));

  const PORT = process.env.TEST_PORT ? parseInt(process.env.TEST_PORT, 10) : 3000;
  await app.listen(PORT, '0.0.0.0');
  console.log(`Server is running on http://0.0.0.0:${PORT}`);
}

bootstrap();
