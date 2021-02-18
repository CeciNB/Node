# Node.js course

[Markdown Cheatsheet](https://github.com/tchapi/markdown-cheatsheet 'great resource to create markdown files')

## Datatypes and declaration

NEVER use 'var' because of scope flaw

USE 'const' for when you don't plan on changing the value.
USE 'let' for when you plan on it being chaning

```bash
const mywife = 'Nana';
let  = 'Nana';
```

## Express

Their words _"Fast, unopinionated, minimalist web framework for node."_

Steps:

1. create package.json file
2. add express dependency
3. in terminal npm i
4. create a file like app.js
5. import express like

```bash
const express = require('express')
const app = express()

//route (GetMapping) for endpoint: '/' - responds to GET request
app.get('/', (req, res) => {
  res.send('Hello World')
})

// starts the server
app.listen(5555)
```
