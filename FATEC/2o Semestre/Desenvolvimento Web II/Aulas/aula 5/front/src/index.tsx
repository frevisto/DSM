// faz a ligação entre o public/index.html e o src/App.tsx

import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css";

const root = ReactDOM.createRoot(
document.getElementById('root') as HTMLElement
);
root.render( <App /> );

export {root};