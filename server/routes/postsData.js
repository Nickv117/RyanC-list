const express = require("express")
const router = express.Router()
const conn = require("../db")

router.post("/post", (req, res, next) => {
  const getSQL = `SELECT id FROM categories WHERE slug = ?`
  const insertSql = `INSERT INTO posts (id, name, parent_id) VALUES (?, ?, ?)`
  conn.query(getSQL, [req.body.slug], (err, results, fields) => {
    const catId = results[0].catId
    conn.query(
      insertSql,
      [req.body.name, req.body.post, catId],
      (err2, results2, fields2) => {
        res.json({
          id: results2.insertId
        })
      }
    )
  })
})

router.get("/posts/:id", (req, res, next) => {
  const sql = `SELECT * FROM posts WHERE id = ?`

  conn.query(sql, [req.params.id], (err, results, fields) => {
    res.json(results)
  })
})

module.exports = router
