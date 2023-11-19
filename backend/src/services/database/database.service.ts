import Client from "pocketbase";
import {Injectable} from "@nestjs/common";

//@ts-ignore
const PocketBase = require('pocketbase/cjs');


type  DbRequestCallback = (db: Client) => Promise<any>;

@Injectable()
export class DatabaseService {
  public db: Client;

  constructor() {
    this.db = new PocketBase(process.env.DATABASE_URL);
  }

  async evalDbRequest(callback: DbRequestCallback): Promise<any> {
    if (!this.db.authStore.isValid) {
      await this.db.admins.authWithPassword(process.env.DATABASE_LOGIN, process.env.DATABASE_PASSWORD);
    }

    return callback(this.db);
  }
}