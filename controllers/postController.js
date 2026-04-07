// Controller per i post
// Qui mettiamo la logica delle funzioni per gestire i post

// Array in memoria con i post
const posts = [
  {
    id: 1,
    title: 'Benvenuti nel mio blog',
    content: 'Questo è il primo post del mio blog personale.',
    image: '/images/post1.svg',
    tags: ['introduzione', 'blog', 'express']
  },
  {
    id: 2,
    title: 'Un secondo post',
    content: 'Aggiungiamo altro contenuto al nostro blog con Express.',
    image: '/images/post2.svg',
    tags: ['esercizio', 'server', 'javascript']
  },
  {
    id: 3,
    title: 'Come usare le immagini statiche',
    content: 'Ora il blog mostra immagini salvate nella cartella public.',
    image: '/images/post3.svg',
    tags: ['statico', 'assets', 'immagini']
  },
  {
    id: 4,
    title: 'Route JSON',
    content: 'La rotta /posts restituisce tutti i post in formato JSON.',
    image: '/images/post4.svg',
    tags: ['json', 'api', 'post']
  },
  {
    id: 5,
    title: 'Ultimo post di prova',
    content: 'Questo è l’ultimo post del nostro array di prova.',
    image: '/images/post5.svg',
    tags: ['progetto', 'tutorial', 'express']
  }
];

// Funzione per ottenere tutti i post (index)
function index(req, res) {
  res.json(posts);
}

// Funzione per ottenere un singolo post (show)
function show(req, res) {
  const postId = Number(req.params.id);
  const post = posts.find(post => post.id === postId);

  if (!post) {
    return res.status(404).send(`Post ${postId} non trovato`);
  }

  res.json(post);
}

// Funzione per creare un nuovo post (create)
function create(req, res) {
  res.send('Creazione nuovo post');
}

// Funzione per aggiornare un post (update)
function update(req, res) {
  res.send('Modifica integrale del post ' + req.params.id);
}

// Funzione per eliminare un post (destroy)
function destroy(req, res) {
  res.send('Cancellazione del post ' + req.params.id);
}

// Esportiamo le funzioni per usarle nel router
module.exports = {
  index,
  show,
  create,
  update,
  destroy
};