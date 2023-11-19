import {Controller, Get, Req} from "@nestjs/common";
import {ProductsService} from "./products.service";
import {Request} from "express";

@Controller('products')
export class ProductsController {


    constructor(private productService: ProductsService) {


    }

    @Get()
    async list(@Req() request: Request) {

        const records = await this.productService.getList();

        return {records};
    }

}