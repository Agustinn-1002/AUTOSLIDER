import './App.css';
import {datos} from './data/index'

function App() {
  return (
    <main>
      <div className="hero-left App">
        <div className='layers'>
          {datos.map(e=>
            <div className='layer layer-displayed'>
                <span>{e.titulo}</span>
                <div
                  className='layer-image'
                  style={{backgroundImage: `url(${e.image})`}}
                ></div>
                <div className='layer-info'>
                  <div>
                    <strong>Size</strong>
                    <strong>Shape</strong>
                    <strong>Camber</strong> d
                    <strong>Width</strong>
                    <strong>Flex</strong>
                    <strong>Sidecut</strong>
                  </div>
                  <span>{e.size}</span>
                  <span>{e.shape}</span>
                  <span>{e.camber}</span>
                  <span>{e.width}</span>
                  <span>{e.flex}</span>
                  <span>{e.sidecut}</span>
                </div>
            </div>
          )}
        </div>
        <button>{'<-'}</button>
        <button>{'->'}</button>
      </div>
      <div className='hero'></div>
    </main>
  );
}

export default App;
