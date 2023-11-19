/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("j3ov6hcnmhcffry")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sg8bqw4c",
    "name": "field",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "0mciehrbgqeiouv",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("j3ov6hcnmhcffry")

  // remove
  collection.schema.removeField("sg8bqw4c")

  return dao.saveCollection(collection)
})
