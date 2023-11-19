/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("udr0a6nywkghalv");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "udr0a6nywkghalv",
    "created": "2023-11-17 20:42:23.326Z",
    "updated": "2023-11-17 20:42:23.326Z",
    "name": "ProductTags",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "erc610rm",
        "name": "name",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
