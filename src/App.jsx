import { useState } from 'react'
import './App.css'
import Card from "./Card";


function App() {

    //Variables de estado
    const [lista, setLista] = useState([])

    const [estudiante, setEstudiante] = useState({
      nombre: '',
      apellido: ''
    })
    
    const [mostrar, setMostrar] = useState(false)
    const [error, setError] = useState(false) 

    //Funcion que agrega a la lista
    const  add = (item) => {
      setLista([...lista, item])
    }

    //Manejador del Submit y validaciones
    const onSubmitForm = (e) => {
      e.preventDefault();
      const nombreValido = ValidarNombre(estudiante.nombre)
      const apellidoValido = validarApellido(estudiante.apellido)

      if (nombreValido && apellidoValido){
          setMostrar(true)
          add(estudiante)
          setError(false)
      }else{
          setError(true)
      }
  }

  const ValidarNombre = (nombre) => {
    //logica de validacion
    const nombreSinEspacios = nombre.trim()

    if (nombreSinEspacios === nombre && nombre.length > 2){
        return true
    }else{
        return false
    }
}

const validarApellido = (apellido) => {
    //logica de apellido    
    if (apellido.length > 5){
      return true
  }else{
      return false
  }
}


  return (
    <div className="App">
      <h1>Registro de estudiantes</h1>
      <h2>Asignatura Frontend III</h2>
      <form onSubmit={onSubmitForm}>
            <input
            type="text"
            placeholder="Nombre del estudiante"
            value={estudiante.nombre}
            onChange={(event) => setEstudiante({...estudiante, nombre: event.target.value})}
            style={{ marginBottom: '10px', padding: '5px' }}
            />
            <input
            type="text"
            placeholder="Apellido del estudiante"
            value={estudiante.apellido}
            onChange={(event) => setEstudiante({...estudiante, apellido: event.target.value})}
            style={{ marginBottom: '10px', padding: '5px' }}
            />
            <br />
            <button type="submit" style={{ padding: '8px 15px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '3px' }}>Enviar</button>
            {error && <h4 style={{color: 'red'}}>Por favor chequea que la información sea correcta</h4>}
        </form>
        {mostrar && <div>{lista.map((estudiante, index) => <Card key={index} estudiante={estudiante}  />)}</div>}
    </div>
  );
}


export default App;
