import * as express from 'express';
import * as cors from 'cors';
import { pokemon } from './pokemon';

const app = express();
app.use(cors());

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to api Elena!' });
});

/**
 * returning the whole pokemon collection into the /pokemon
 * endpoint - this is where we should access any info related
 * to pokemons, like id number, type or base
 */
app.get('/pokemon', (_, res) => {
  res.send(pokemon);
});

/**
 * searching pokemons
 * the endpoint is /search
 * we type 'search?q=' + the name of the pokemon we want to find
 * we are accessing the request object through 'req.query.q'
 */
app.get('/search', (req, res) => {
  const searchQuery = ((req.query.q as string) ?? '').toLowerCase();

  res.send(
    pokemon.filter(({ name: { english } }) =>
      english.toLowerCase().includes(searchQuery)
    )
  );
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
