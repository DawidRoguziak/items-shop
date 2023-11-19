/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("j3ov6hcnmhcffry")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "m9tuv9oq",
    "name": "tags",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 6,
      "values": [
        "Fruit",
        "Breackfast",
        "Dinner",
        "Launch",
        "Tiffin",
        "Snacks",
        "Meat",
        "Bread",
        "Vitamins",
        "Kid foods",
        "Vegetarian",
        "Low fat",
        "Healthy",
        "Vegetable"
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
    "name": "tags",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 2,
      "values": [
        "Fruit",
        "Breackfast",
        "Dinner",
        "Launch",
        "Tiffin",
        "Snacks",
        "Meat",
        "Bread",
        "Vitamins",
        "Kid foods",
        "Vegetarian",
        "Low fat",
        "Healthy",
        "Vegetable"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
