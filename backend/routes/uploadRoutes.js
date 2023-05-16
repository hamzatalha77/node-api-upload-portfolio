const express = require('express')
const multer = require('multer')

const app = express()
const upload = multer({ dest: 'uploads/' })

app.post('/upload', upload.array('images'), (req, res) => {
  // Access uploaded files through req.files
  // Handle the files (e.g., save them, process them, etc.)

  // Example response
  res.status(200).json({ message: 'Files uploaded successfully' })
})

app.listen(3000, () => {
  console.log('Server is listening on port 3000')
})
