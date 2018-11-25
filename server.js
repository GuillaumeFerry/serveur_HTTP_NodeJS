const express = require('express');
const app = express();
const port = 3000;
// Module pour lire les pages HTML
const fs = require('fs'); 

// Définition de l'emplacement des pages .PUG
app.set('views', './views')
// Chargement du moteur de modèle PUG
app.set('view engine', 'pug')



// Rendu de la page index.pug avec le moteur PUG
app.get('/', (request, response) => {
  response.status(200).render('index');
});

// Rendu de la page about.pug avec le moteur PUG
// app.get('/about', (request, response) => {
//   response.status(200).render('about');
// });



// Rendu de la page about.html
app.get('/about', (request, response) => {
  fs.readFile('about.html', function(err, data) {
    response.writeHead(200, {'Content-type':'text/html; charset=utf-8'});
    response.write(data);
    response.end();
  });
});


app.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
  }

  console.log(`Server is listening on ${port}`);
});
