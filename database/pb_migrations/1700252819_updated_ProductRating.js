/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vxjlsy95nna9uua")

  collection.name = "ProductRatings"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vxjlsy95nna9uua")

  collection.name = "ProductRating"

  return dao.saveCollection(collection)
})
