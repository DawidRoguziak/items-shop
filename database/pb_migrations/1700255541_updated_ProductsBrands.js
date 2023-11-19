/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hups6rqh153mwvj")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vwjma6gd",
    "name": "image",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": [],
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hups6rqh153mwvj")

  // remove
  collection.schema.removeField("vwjma6gd")

  return dao.saveCollection(collection)
})