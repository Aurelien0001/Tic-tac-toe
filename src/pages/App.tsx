import { Link } from 'react-router-dom'
import './../styles/App.css'

function App() {

  return (
    <>
      <div className="grosTitre">
        <h1 >Tic-tac-toe</h1>
      </div>
      
        <Link to={'/choix'}><button>Choix du jeu</button></Link>
      
    </>
  )
}

export default App
