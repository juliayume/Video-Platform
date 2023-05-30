import homemJanela from './assets/HomemJanela.jpg';
import computer from './assets/Computer.jpg';
import skate from './assets/Skate.jpg';
import photography from './assets/Photography.jpg';
import bird from './assets/Bird.jpg';
import guitar from './assets/Guitar.jpg';
import stand from './assets/Stand.jpg';
import yellow from './assets/Yellow.jpg';
import './App.css';

function App() {

  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido")
  }

  return (
    <div className="tela-inteira">
        <header>
            <h1>Video</h1>
            <input type="text" placeholder="Busca" id="campoDeBusca"></input>
        </header>

        <main>
            <nav className="menu-vertical">
                <ul>
                    <li className="botoes-meunu-vertical">Início</li>
                    <li className="botoes-meunu-vertical">Em alta</li>
                    <li className="botoes-meunu-vertical">Inscrições</li>
                    <hr></hr>
                    <li className="botoes-meunu-vertical">Originais</li>
                    <li className="botoes-meunu-vertical">Histórico</li>
                </ul>
            </nav>

            <section className="painel-de-videos">
                <div className="box-pagina-principal media1" onClick="reproduzVideo()">
                    <img src={homemJanela} alt=""></img>
                    <h4>Título do vídeo</h4>
                </div>
                <div className="box-pagina-principal media2" onClick="reproduzVideo()">
                    <img src={computer} alt=""></img>
                    <h4>Título do vídeo</h4>
                </div>
                <div className="box-pagina-principal media3" onClick="reproduzVideo()">
                    <img src={skate} alt=""></img>
                    <h4>Título do vídeo</h4>
                </div>
                <div className="box-pagina-principal media4" onClick="reproduzVideo()">
                    <img src={photography} alt=""></img>
                    <h4>Título do vídeo</h4>
                </div>
                <div className="box-pagina-principal media5" onClick="reproduzVideo()">
                    <img src={bird} alt=""></img>
                    <h4>Título do vídeo</h4>
                </div>
                <div className="box-pagina-principal media6" onClick="reproduzVideo()">
                    <img src={guitar} alt=""></img>
                    <h4>Título do vídeo</h4>
                </div>
                <div className="box-pagina-principal media7" onClick="reproduzVideo()">
                    <img src={stand} alt=""></img>
                    <h4>Título do vídeo</h4>
                </div>
                <div className="box-pagina-principal media8" onClick="reproduzVideo()">
                    <img src={yellow} alt=""></img>
                    <h4>Título do vídeo</h4>
                </div>
            </section>
        </main>

        <footer>
            <h4>Oi! Eu moro no footer!</h4>
        </footer>
    </div>
  );
}

export default App;
