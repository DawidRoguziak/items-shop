/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "j3ov6hcnmhcffry",
    "created": "2023-11-17 20:25:59.377Z",
    "updated": "2023-11-17 20:25:59.377Z",
    "name": "Products",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "5i4snycd",
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
      },
      {
        "system": false,
        "id": "d6tyhqyi",
        "name": "images",
        "type": "file",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 99,
          "maxSize": 5242880,
          "mimeTypes": [],
          "thumbs": [],
          "protected": false
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
  const collection = dao.findCollectionByNameOrId("j3ov6hcnmhcffry");

  return dao.deleteCollection(collection);
})
