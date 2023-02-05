import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { HoloCard } from '../.';

const App = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        display: 'grid',
        placeItems: 'center',
      }}
    >
      <HoloCard />
    </div>
  );
};

const container = document.getElementById('root');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(<App />);
