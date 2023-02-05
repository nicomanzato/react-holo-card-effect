import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { HoloCard } from '../.';

const App = () => {
  return (
    <div style={{ backgroundColor: '#333844' }}>
      <div
        style={{
          width: '100%',
          display: 'grid',
          placeItems: 'center',
          minHeight: '100vh',
          gridTemplateColumns: '1fr',
          maxWidth: '1440px',
          margin: 'auto',
        }}
      >
        <HoloCard url={'https://assets.codepen.io/13471/pikachu-gx.webp'} />
      </div>
    </div>
  );
};

const container = document.getElementById('root');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(<App />);
