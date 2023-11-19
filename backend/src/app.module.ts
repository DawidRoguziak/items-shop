import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {ConfigModule} from "@nestjs/config";
import {ProductsModule} from "./controllers/products/products.module";
import {DatabaseModule} from "./services/database/database.module";

@Module({
    imports: [
        ConfigModule.forRoot(),
        DatabaseModule,
        ProductsModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
