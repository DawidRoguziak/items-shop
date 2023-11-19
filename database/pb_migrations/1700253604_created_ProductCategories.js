/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "0mciehrbgqeiouv",
    "created": "2023-11-17 20:40:04.668Z",
    "updated": "2023-11-17 20:40:04.668Z",
    "name": "ProductCategories",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "cccwzbfy",
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
  const collection = dao.findCollectionByNameOrId("0mciehrbgqeiouv");

  return dao.deleteCollection(collection);
})
