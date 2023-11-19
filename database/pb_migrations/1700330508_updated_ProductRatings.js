/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vxjlsy95nna9uua")

  // remove
  collection.schema.removeField("60rtdrvg")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ziwsrosn",
    "name": "opinion",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vxjlsy95nna9uua")

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  // remove
  collection.schema.removeField("ziwsrosn")

  // remove
  collection.schema.removeField("hoxzzjfm")

  return dao.saveCollection(collection)
})
