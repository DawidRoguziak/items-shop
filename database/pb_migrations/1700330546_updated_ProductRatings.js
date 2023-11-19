/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vxjlsy95nna9uua")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hoxzzjfm",
    "name": "rating",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "1",
        "1.5",
        "2",
        "2.5",
        "3",
        "3.5",
        "4",
        "4.5",
        "5"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vxjlsy95nna9uua")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hoxzzjfm",
    "name": "rating",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "1",
        "1.5",
        "2.5",
        "3",
        "3.5",
        "4",
        "4.5",
        "5"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
