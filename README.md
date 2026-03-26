
# Three.js Playground


A playground project using React, Vite, and Three.js (via @react-three/fiber and @react-three/drei) to render interactive 3D scenes. This project includes a volcano model and smoke effects, with camera controls.

## 🌐 Live Demo

[View the live page here!](https://bbgott.github.io/threejs-playground)

## Features
- 3D volcano scene rendered with Three.js
- Animated smoke effect
- Interactive camera controls (orbit, zoom, angle limits)
- Uses React and Vite for fast development

## Getting Started

### Prerequisites
- Node.js (v18 or newer recommended)
- npm (comes with Node.js)

### Installation
1. Clone the repository:
  ```sh
  git clone <repo-url>
  cd threejs-playground
  ```
2. Install dependencies:
  ```sh
  npm install
  ```

### Running the Development Server
Start the Vite development server:
```sh
npm run dev
```

This will start the app at [http://localhost:5173](http://localhost:5173) (or another port if 5173 is in use).

### Project Structure
- `src/App.tsx` — Main React component, sets up the 3D scene
- `src/Volcano.jsx` — Volcano 3D model component
- `src/Smoke.jsx` — Smoke effect component
- `public/` — Static assets

### Customization
- Edit or add components in the `src/` directory to modify the scene.
- Update styles in `src/App.css` or `src/index.css`.

## License

This project is licensed under the MIT License.
