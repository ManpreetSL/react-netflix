import './App.css';
import Jumbotron from './components/jumbotron';
import jumboFixture from './fixtures/jumbo.json';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Netflix</h1>
      </header>
      <main>
        <Jumbotron.Container>
          {jumboFixture.map((item) => (
            <Jumbotron key={item.id} direction={item.direction}>
              <Jumbotron.Pane>
                <Jumbotron.Title>{item.title}</Jumbotron.Title>
                <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
              </Jumbotron.Pane>
              <Jumbotron.Pane>
                <Jumbotron.Image src={item.image} alt={item.alt} />
              </Jumbotron.Pane>
            </Jumbotron>
          ))}
        </Jumbotron.Container>
      </main>
    </div>
  );
}

export default App;
