# JS Tooling

Script to run through with web tooling

## Linting

We'll use `eslint`. We could also use `prettier`, which is more for formatting whereas eslint handles both formatting and linting (catching & reparing bugs/syntax issues).

```
npm install eslint --save-dev
npx eslint <file>
npx eslint --init
# check it out in your IDE
```

Edit the config
```
# add...
"no-unused-vars":["off"]
```

## Husky

Husky helps run things as git hooks.

Check their docs.

```
npm install husky --save-dev
```

Edit your package.json:
```
	"pre-commit": "eslint *.js"
```

## Transpiling

We'll use `babel` to help transpile our "modern js" into "browser friendly old man js".

Let's check the docs to make sure we have everything.

```
npm install @babel/core @babel/cli @babel/preset-env --save-dev
npx babel <file> --out-file <outfile>
# create a config or copy it from ./configs/babelrc
npx babel
```

## Bundling

We'll use `webpack` to bundle our code so we can write using ES Modules. Webpack is also a generic runner, which can handle a lot of tasks like compiling CSS, optimizing images, etc.

Visit the webpack site to make sure we have everything.

```
npm install webpack webpack-cli --save-dev
npx webpack <file>
# see the /dist folder

npx webpack --watch <file>

# add the config from /configs

npx install babel-loader --save-dev
npx webpack
```
