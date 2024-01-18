
import './App.css'
import Form from './components/Form/Form'
import Header from './components/shared/Header'
import Main from './components/shared/Main'

function App() {

  return (
    <div className='sm:bg-white sm:flex sm:flex-row-reverse sm:rounded-3xl sm:w-3/5 font-body'>
      <Header/>
      <Main>
        <Form/>
      </Main>
    </div>
  )
}

export default App
