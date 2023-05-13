import * as ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const container = document.getElementById('root');
if (!container) throw new Error('Container not found');
ReactDOM.createRoot(container).render(<App />);

// Path: src/App.tsx
