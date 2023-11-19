/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "oyr3lughwqtgzux",
    "created": "2023-11-17 20:36:29.317Z",
    "updated": "2023-11-17 20:36:29.317Z",
    "name": "ProductPrices",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "dgdtakmt",
        "name": "product",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "j3ov6hcnmhcffry",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": null,
          "displayFields": null
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
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("oyr3lughwqtgzux");

  return dao.deleteCollection(collection);
})
