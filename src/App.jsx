import './App.css'

function App() {
  return (
    <div className="contenedor-principal">
  
      <h1 className="titulo">Desarrollador en Formación</h1>
      
      <img 
        src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=400" 
        alt="Computador con código" 
        className="imagen-perfil"
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