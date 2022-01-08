# `Typescript` `NX` Monorepo with `NextJS` & `Express`

## Table of Contents 🌳

- [About](#about-)
- [Building the API](#building-the-api-)
- [Creating the NextJS App](#creating-the-nextjs-app-)
- [Creating the Shared Library](#creating-the-shared-library-)
- [Using the Shared Library](#using-the-shared-library-)
- [Adding CORS](#adding-cors-)

## About 🚥

⬆️ [Go Back](#table-of-contents-)

Building an NX monorepo with an Express API.
The api shares Typescript types with a NextJS application

## Building the API 🧱

⬆️ [Go Back](#table-of-contents-)

- ### Turning a `json` into a `ts` file:
  1. change the file extension to `ts`
  2. **Important!** selecting the first object of the `json` file and _then_ run the `convert json clipboard to typescript interfaces` plugin (`Shift+Command+P`). The plugin creates a new interface based on the last clipboard information!
  3. adjust the interface as needed
  4. `export const [name]: [nameType]` -> exporting the whole `json` as an object
  5. that's it! 👏
- ### Searching **pokemons** @ `/search?q=`

  1. our search in case-sensitive
  2. we are accessing the request object through `req.query.q`

- to run the api -> `nx run api:serve`

## Creating the NextJS App 📦

⬆️ [Go Back](#table-of-contents-)

- with `nx list` we can see all the **NX** plugins that are installed in our application
- then we add the `@nrwl/next` to create a **NextJS** app into our apps folder:
  - `npm install @nrwl/next`
  - `nx g @nrwl/next:app`
- now we should have 2 new folders into our `apps` directory: **next-pokemon** and **next-pokemon-e2e**!
- to run -> `nx run next-pokemon:serve`

## Creating the Shared Library 📚

⬆️ [Go Back](#table-of-contents-)

- we have to create a shared library, where all `Typescript` types are going to be found
- run `nx g @nrwl/node:lib shared-types`
- this will create a `shared-types` folder inside the `libs` folder of our application

## Using the Shared Library 💳

⬆️ [Go Back](#table-of-contents-)

- we **move** the _Pokemon interface type_ from the `pokemon.json` to the `libs > shared-types > src > index.ts`
- we import the type into our pokemon.json again: `import type { Pokemon } from '@nx-pokemon-1/shared-types';`
- the workspace assumes the `libs` place automatically, so **the import does not need more explicit specification**

## Adding CORS 🔩

⬆️ [Go Back](#table-of-contents-)

- when we are given `TypeError: Failed to fetch`, we have to add `CORS`
- `yarn add cors`
- this will allow anybody to request data from the server
- in the api `main.ts` we add:
  - `import * as cors from 'cors';`
  - `app.use(cors());`
- ⚠️ don't forget to add `search` in the dependency array in the `useEffect`! If you don't, you will end with continuous, _endless_ requests to your api - see `Network` tab in **Chrome Developer Tools** 😏
