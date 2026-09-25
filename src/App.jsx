import './App.css'

function App() {
  return (
    <div className="contenedor-principal">
  
      <h1 className="titulo">Desarrollador en Formación</h1>
      
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
        alt="Logo de React" 
        className="imagen"
      />

      <p className="descripcion">
        ¡Hola! Soy Carol Collantes estudiante de Ingeniería de Sistemas. Me apasiona el desarrollo web, 
        la tecnología y la creación de soluciones interactivas utilizando React y JavaScript.
      </p>

      <div className="seccion-hobbies">
        <h2>Intereses Tecnológicos</h2>
        <ul>
          <li>Desarrollo con React</li>
          <li>Gestión de repositorios con Git y GitHub</li>
          <li>Diseño de interfaces sencillas e intuitivas</li>
        </ul>
      </div>
    </div>
  )
}

export default App