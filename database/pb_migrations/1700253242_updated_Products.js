/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("j3ov6hcnmhcffry")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ehjrbvve",
    "name": "expiration",
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
  const collection = dao.findCollectionByNameOrId("j3ov6hcnmhcffry")

  // remove
  collection.schema.removeField("ehjrbvve")

  return dao.saveCollection(collection)
})
