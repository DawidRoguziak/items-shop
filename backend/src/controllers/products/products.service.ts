import {Injectable} from "@nestjs/common";
import {DatabaseService} from "../../services/database/database.service";


@Injectable()
export class ProductsService {

    constructor(private db: DatabaseService) {

    }

    getList() {
        return this.db.evalDbRequest((db) => {
            return db.collection('Products')
                .getList(1, 10, {
                    expand: 'category',
                    // filter: `category.name = 'Vegetables'`,
                });
        });
    }

}