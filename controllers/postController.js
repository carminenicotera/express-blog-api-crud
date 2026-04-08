// Controller per i post
// Qui mettiamo la logica delle funzioni per gestire i post

// Importiamo l'array dei post dal file di dati
const posts = require('../data/posts');

// Funzione per ottenere tutti i post (index)
function index(req, res) {
  // Inizialmente, restituiamo tutti i post senza filtri
  let filteredPosts = posts;

  // Se c'è un query parameter "tag", filtriamo i post per quel tag
  const tag = req.query.tag;

  if (tag) {
    filteredPosts = posts.filter(post => post.tags.includes(tag));
  }

  // Restituiamo i post filtrati (o tutti se non c'è il tag) in formato JSON
  res.json(filteredPosts);
}

// Funzione per ottenere un singolo post (show)
function show(req, res) {
  const postId = Number(req.params.id);
  const post = posts.find(post => post.id === postId);

  if (!post) {
    return res.status(404).json({ error: `Post ${postId} non trovato` });
  }

  res.json(post);
}

// Funzione per creare un nuovo post (store)
function store(req, res) {
  //console.log(req.body);
  // Creiamo un nuovo post con i dati ricevuti nel corpo della richiesta
  // Generiamo un nuovo ID incrementale basato sull'ultimo post nell'array
  const newId = posts.length > 0 ? posts[posts.length - 1].id + 1 : 1;

  // Creiamo un nuovo oggetto post con i dati ricevuti e il nuovo ID
  const newPost = {
    id: newId,
    title: req.body.title,
    content: req.body.content,
    tags: req.body.tags || []
  };

  // Aggiungiamo il nuovo post all'array dei post
  posts.push(newPost);
  console.log(posts);
  
  // Restituiamo il nuovo post creato in formato JSON con status 201 (Created)
  res.status(201).json(newPost);
}

// Funzione per aggiornare un post (update)
function update(req, res) {
  res.send('Modifica integrale del post ' + req.params.id);
}

// Funzione per eliminare un post (destroy)
function destroy(req, res) {
  const postId = Number(req.params.id);
  const index = posts.findIndex(post => post.id === postId);
 
  if (index === -1) {
    return res.status(404).json({ error: `Post ${postId} non trovato` });
  }

  posts.splice(index, 1);
  console.log('Lista post aggiornata:', posts);
  res.status(204).send();
}

// Esportiamo le funzioni per usarle nel router
module.exports = {
  index,
  show,
  store,
  update,
  destroy
};