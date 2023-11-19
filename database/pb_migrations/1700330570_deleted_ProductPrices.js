/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("oyr3lughwqtgzux");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "oyr3lughwqtgzux",
    "created": "2023-11-17 20:36:29.317Z",
    "updated": "2023-11-17 21:30:17.943Z",
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
        "presentable": true,
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
        "id": "eqrjasic",
        "name": "startDate",
        "type": "date",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "9ssq7sel",
        "name": "endDate",
        "type": "date",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "wvqlem8i",
        "name": "priceBase",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      },
      {
        "system": false,
        "id": "z2be6zm8",
        "name": "pricePromotion",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      },
      {
        "system": false,
        "id": "scu1aphn",
        "name": "quantity",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
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
})
