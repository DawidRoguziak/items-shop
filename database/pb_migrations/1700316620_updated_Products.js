/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("j3ov6hcnmhcffry")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "m9tuv9oq",
    "name": "field",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 2,
      "values": [
        "falt",
        "aaa"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("j3ov6hcnmhcffry")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "m9tuv9oq",
    "name": "field",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "falt",
        "aaa"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
