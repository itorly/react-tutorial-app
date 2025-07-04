# react-tutorial-app

## Steps to install react package and run my code
1. Initialize a new Node.js project
```bash
npm init -y
```

2. Install React and React DOM
```bash
npm install react
npm install react-dom
```

3. Make sure your .js file uses ES modules.
Add "type": "module" to your package.json:
```json
{
  "name": "your-project",
  "version": "1.0.0",
  "type": "module",
  ...
}
```

4. run your code
```bash
node your-file.js
```


## Use a bundler: Vite
1. install vite
```bash
npm install -D vite @vitejs/plugin-react
```

2. Create a vite.config.js
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
```

3. Update your package.json to include scripts:
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

4. Run npx vite to start the development server.
```bash
npx vite
```