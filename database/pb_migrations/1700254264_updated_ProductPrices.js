/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("oyr3lughwqtgzux")

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("oyr3lughwqtgzux")

  // remove
  collection.schema.removeField("scu1aphn")

  return dao.saveCollection(collection)
})
