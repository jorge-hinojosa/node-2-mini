const express = require('express');
const app = express();

const bc = require('./controllers/book_controller');

app.use(express.json());
app.use(express.static(__dirname + '/../build'))

app.get('/api/books', bc.read);

app.post('/api/books', bc.create);

app.put('/api/books/:id', bc.update);

app.delete('/api/books/:id', bc.delete)

const PORT = 4000;
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));