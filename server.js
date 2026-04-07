const express = require('express');
const postsRouter = require('./routers/posts');

const app = express();

// Serviamo i file statici dalla cartella public/images
app.use(express.static('public'));

// Registro il router dei post con prefisso /posts
app.use('/posts', postsRouter);

// Rotta principale
app.get('/', (req, res) => {
  res.send('Server del mio blog');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server avviato su http://localhost:${PORT}`);
});
