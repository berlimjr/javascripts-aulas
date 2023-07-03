import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import 'boxicons'

function App() {
  return (
    <main className='min-h-screen flex flex-col justify-between'>
      <Header header={'header'} />
      <Main />
      <Footer />
    </main>
    
  )
}

export default App
