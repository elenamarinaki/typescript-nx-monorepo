# `Typescript` `NX` Monorepo with `NextJS` & `Express`

## Table of Contents 🌳

- [About](#about-)
- [Building the API](#building-the-api-)
- [Creating the NextJS App](#creating-the-nextjs-app-)

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

## Creating the NextJS App 📦

⬆️ [Go Back](#table-of-contents-)

- with `nx list` we can see all the **NX** plugins that are installed in our application
- then we add the `@nrwl/next` to create a **NextJS** app into our apps folder:
  - `npm install @nrwl/next`
  - `nx g @nrwl/next:app`
- now we should have 2 new folders into our `apps` directory: **next-pokemon** and **next-pokemon-e2e**!
