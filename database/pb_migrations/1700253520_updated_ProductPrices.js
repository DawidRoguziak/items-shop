/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("oyr3lughwqtgzux")

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("oyr3lughwqtgzux")

  // remove
  collection.schema.removeField("eqrjasic")

  // remove
  collection.schema.removeField("9ssq7sel")

  return dao.saveCollection(collection)
})
