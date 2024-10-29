const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt') // Untuk hashing password

const app = express()
const port = 3000

// Middleware
app.use(cors())
app.use(bodyParser.json())

// Koneksi ke database MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // ganti dengan username MySQL Anda
  password: '', // ganti dengan password MySQL Anda
  database: 'infinitry', // ganti dengan nama database Anda
})

db.connect(err => {
  if (err) {
    console.error('Database connection failed:', err)
    return
  }
  console.log('Connected to database.')
})

// Endpoint untuk mendapatkan semua item
app.get('/api/items', (req, res) => {
  db.query('SELECT * FROM items', (err, results) => {
    if (err) {
      return res.status(500).send(err)
    }
    res.json(results)
  })
})

// Endpoint untuk menambahkan item
app.post('/api/items', (req, res) => {
  const newItem = req.body
  db.query('INSERT INTO items SET ?', newItem, (err, result) => {
    if (err) {
      return res.status(500).send(err)
    }
    res.status(201).json({ id: result.insertId, ...newItem })
  })
})

app.post('/api/login', (req, res) => {
  const { username, password } = req.body

  db.query(
    'SELECT * FROM admins WHERE name = ?',
    [username],
    (error, results) => {
      if (error) {
        return res.status(500).json({ error: 'Database error' })
      }

      if (results.length > 0) {
        const user = results[0]
        console.log(password)
        console.log(user.password)
        // Verifikasi password
        if (bcrypt.compareSync(password, user.password)) {
          return res.status(200).json({ message: 'Login successful', user })
        } else {
          return res.status(401).json({ error: 'Invalid password' })
        }
      } else {
        return res.status(404).json({ error: 'User not found' })
      }
    },
  )
})

// Jalankan server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`)
})
