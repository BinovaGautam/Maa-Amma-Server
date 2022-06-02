import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { CategoriesModule } from './categories/categories.module';
import { ProductsModule } from './products/products.module';
import { SellersModule } from './sellers/sellers.module';
import { AttributesModule } from './attributes/attributes.module';

@Module({
  imports: [ProductsModule, UserModule, AuthModule, PrismaModule, CategoriesModule, SellersModule, AttributesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
 