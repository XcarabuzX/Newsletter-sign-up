
import './App.css'
import estilos from './App.module.css';
import Form from './components/Form/Form'
import Header from './components/shared/Header'
import Main from './components/shared/Main'

function App() {

  return (
    <div className={estilos.tarjeta + " font-body"}>
      <Header/>
      <Main>
        <Form/>
      </Main>
    </div>
  )
}

export default App
