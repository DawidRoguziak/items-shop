/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "vxjlsy95nna9uua",
    "created": "2023-11-17 20:26:44.714Z",
    "updated": "2023-11-17 20:26:44.714Z",
    "name": "ProductRating",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "mltgpnoy",
        "name": "field",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "j3ov6hcnmhcffry",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "60rtdrvg",
        "name": "rating",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": 0,
          "max": 5,
          "noDecimal": false
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
  const collection = dao.findCollectionByNameOrId("vxjlsy95nna9uua");

  return dao.deleteCollection(collection);
})
