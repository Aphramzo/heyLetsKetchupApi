# heyLetsKetchupApi

Dead simple node API for sandboxing ideas.

## Installation

Get mongoDB installed and running locally (https://www.mongodb.com/download-center/community) before starting.
You will also need to have yarn installed (https://yarnpkg.com/en/docs/install).

## Execution

You will need to add your own .env file to the root of the project and set the environmental variables as needed.
Here is an example .env pointed at your local mongo server.

```js
PORT=4000
NODE_ENV=development
CONNECTION_STRING=mongodb://localhost/heyLetsKetchup
SECRET=ToEveryone

```

```bash
yarn
```

Followed by

```bash
yarn dev
```
