# 🚧 Backend Project

This is a backend project developed with TypeScript and Node.js for the technical test at TechyWe. Below are the steps to install, build, and run the project, as well as the available commands and their explanations.

# ✍ Requirements

Node.js (v20.11.1)

# 🪛 Installation

To install the project dependencies, make sure you have NodeJs installed on your system. Then, run the following command in your terminal:

```
npm install
```

# 🏗 Build

To compile the TypeScript project, you can execute the following command::

```
npm run build
```

This command will compile the TypeScript code into JavaScript and generate the files in the `dist` folder.

# 🚀 Execution

To start the server, run the following command:

```
npm run dev
```

This command will run the Node.js server and make it accessible at `http://localhost:3000/`.

# 📗 Available Commands

Below are the available commands in this project:

- `npm run dev`: Starts the server in development mode, with automatic restart in case of changes in the source files.
- `npm run build`: Compiles the TypeScript project into JavaScript.
- `npm run start`: Starts the Node.js server after compilation.

# 🪶 Features

- Triangle Exercise:
  You can send a POST with this body:
  `{
"ladoA": 52,
"ladoB": 95,
"ladoC": 865
}`

- Concat Array String Exercise:
  You can send a POST with this body:
  `{
	"variable": ["abcd", "efghij", "klmnop202319", "qrst1010101", "cuenta", "uvwxyz"],
	"R": 2
}`

- Josephus Permutation Exercise:
  You can send a POST with this body:
  `{
	"n":[1,2,3,4,5,6,7],
	"k":3
}`


# 🚠 Endpoints
- `http://localhost:3000/api/test/techywe/triangle`
- `http://localhost:3000/api/test/techywe/concatenatedString`
- `http://localhost:3000/api/test/techywe/josephusPermutation`