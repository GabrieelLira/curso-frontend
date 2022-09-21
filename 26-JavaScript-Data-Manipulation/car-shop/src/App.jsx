function App() {


  return (
    <div>

      <header>
        <div id="header">
          <a id="header__logo" href="index.html">Loja de Carros</a>
          <a id="header__contact" className="header__button hover" href="#">Contato</a>
        </div>
        <nav id="header_nav">
          <ul>
            <li><a className="header__button hover2" href="">Novos</a></li>
            <li><a className="header__button hover2" href="">Semi-novo</a></li>
            <li><a className="header__button hover2" href="">Ofertas</a></li>
            <li><a className="header__button hover2" href="">Seguro</a></li>
          </ul>
        </nav>
      </header>

      <section>
        <article id="img">
        </article>
        <article id="about">
          <h1 id="about__title">Como o site funciona?</h1>
          <p id="about__paragraph">
            Você precisa ter uma conta, <a href="#" id="about__paragraph--connect">Conectar</a> / <a href="#" id="about__paragraph--register">Registrar</a> para conseguir vender ou comprar um carro.
          </p>
        </article>

        <main>
          <article className="container">
            <img className="container__image" src="/pexels-mike-b-794435.jpg" alt="" />
            <div className="container__indentify">
              <h1 className="container__indentify--title">aaaa</h1>
              <aside className="container__indentify--paragraph"><p>Cidade: <span>Rio de Janeiro, RJ</span></p><p>Ano: <span>2009/2009</span></p><p>KM: <span>30.000</span></p><p>Câmbio: <span>Automática</span></p><p>Combustível: <span>Gasolina</span></p><p>Cor: <span>Preto</span></p><p>IPVA pago: <span>Sim</span></p><p>Licenciado: <span>Sim</span></p>
              </aside>
            </div>
          </article>
          <article className="container">
            <img className="container__image" src="/pexels-garvin-st-villier-3874337.jpg" alt="" />
            <div className="container__indentify">
              <h1 className="container__indentify--title">aaaa</h1>
              <aside className="container__indentify--paragraph"><p>Cidade: <span>Rio de Janeiro, RJ</span></p><p>Ano: <span>2009/2009</span></p><p>KM: <span>30.000</span></p><p>Câmbio: <span>Automática</span></p><p>Combustível: <span>Gasolina</span></p><p>Cor: <span>Preto</span></p><p>IPVA pago: <span>Sim</span></p><p>Licenciado: <span>Sim</span></p>
              </aside>
            </div>
          </article>
          <article className="container">
            <img className="container__image" src="/pexels-albin-berlin-905554.jpg" alt="" />
            <div className="container__indentify">
              <h1 className="container__indentify--title">aaaa</h1>
              <aside className="container__indentify--paragraph"><p>Cidade: <span>Rio de Janeiro, RJ</span></p><p>Ano: <span>2009/2009</span></p><p>KM: <span>30.000</span></p><p>Câmbio: <span>Automática</span></p><p>Combustível: <span>Gasolina</span></p><p>Cor: <span>Preto</span></p><p>IPVA pago: <span>Sim</span></p><p>Licenciado: <span>Sim</span></p>
              </aside>
            </div>
          </article>
        </main>

      </section>

      <footer>
        <p> &copy; Desenvolvido por: <a href="https://github.com/GabrieelLira">Gabriel Lira</a></p>
      </footer>
    </div>
  )
}

export default App
