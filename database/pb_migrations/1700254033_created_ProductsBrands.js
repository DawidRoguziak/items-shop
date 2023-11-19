/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "hups6rqh153mwvj",
    "created": "2023-11-17 20:47:13.394Z",
    "updated": "2023-11-17 20:47:13.394Z",
    "name": "ProductsBrands",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "behobdjb",
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
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("hups6rqh153mwvj");

  return dao.deleteCollection(collection);
})
