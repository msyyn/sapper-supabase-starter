# sapper-supabase-starter

This is a basic template for setting up a [Sapper](https://github.com/sveltejs/sapper) project, powered by [Supabase](https://supabase.io/).
It includes basic authentication functionality, ie. creating users, logging in and out.

## Getting started


### Using `degit`

To create a new project based on this starter locally, run

```bash
npx degit "msyyn/sapper-supabase-starter" my-app
```

[`degit`](https://github.com/Rich-Harris/degit) is a scaffolding tool that lets you create a directory from a branch in a repository.

Replace `my-app` with the path where you wish to create the project.

### Prerequisites

Register at Supabase and create a new project. Retrieve your public anon key and database URL under Settings > API.
![Supabase API settings](https://cdn-images-1.medium.com/max/800/1*JFHFkaMpSidIa8cJzWofIg.png)

Configure `src/config/settings.js` with your anon key and database URL. You can leave options blank.

### Running the project

Once you have created the project and configured it, install dependencies and run the project in development mode:

```bash
cd my-app
npm install # or yarn
npm run dev
```

This will start the development server on [localhost:3000](http://localhost:3000). Open it and click around.

You now have a fully functional Sapper project, powered by Supabase! To get started developing, consult [sapper.svelte.dev](https://sapper.svelte.dev) and [supabase.io/docs](https://supabase.io/docs).

### Using TypeScript

By default, the template uses plain JavaScript. If you wish to use TypeScript instead, you need some changes to the project:

 * Add `typescript` as well as typings as dependences in `package.json`
 * Configure the bundler to use [`svelte-preprocess`](https://github.com/sveltejs/svelte-preprocess) and transpile the TypeScript code.
 * Add a `tsconfig.json` file
 * Update the project code to TypeScript

The template comes with a script that will perform these changes for you by running

```bash
node scripts/setupTypeScript.js
```

`@sapper` dependencies are resolved through `src/node_modules/@sapper`, which is created during the build. You therefore need to run or build the project once to avoid warnings about missing dependencies.