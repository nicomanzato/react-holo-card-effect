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
          gridTemplateColumns: '1fr',
          maxWidth: '1440px',
          margin: 'auto',
        }}
      >
        <HoloCard url={'https://assets.codepen.io/13471/pikachu-gx.webp'} />
      </div>
      <div
        style={{
          width: '100%',
          display: 'grid',
          placeItems: 'center',
          backgroundColor: '#333844',
          gridTemplateColumns: '1fr 1fr 1fr',
          maxWidth: '1440px',
          margin: 'auto',
        }}
      >
        <HoloCard url={'https://images.pokemontcg.io/sm10/33_hires.png'} />
        <HoloCard url={'https://images.pokemontcg.io/sm35/1_hires.png'} />
        <HoloCard url={'https://images.pokemontcg.io/sm115/7_hires.png'} />
      </div>
    </div>
  );
};

const container = document.getElementById('root');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(<App />);
