import miFoto from './mi-foto.jpeg';
function Perfil() {
    return (
        <section id="perfil" className="container py-5">

            <div className="row align-items-center">

                <div className="col-md-4 text-center">

                    <img
                       src={miFoto} 
                       className="img-fluid rounded-circle shadow" 
                     style={{ width: "230px", height: "230px", objectFit: "cover" }} 
                     alt="Fotografía de perfil"
                    />

                </div>

                <div className="col-md-8">

                    <h1 className="text-primary">
                        Carol Estefani Collantes Dominguez
                    </h1>

                    <h4>Estudiante de Ingeniería de Sistemas</h4>

                    <p>
                        Ciudad: Abrego, Norte de Santander
                    </p>

                    <p>
                        Correo: carolcollantes638gmail.com
                    </p>

                    <p>
                        Soy una persona responsable, creativa y comprometida
                        con mi aprendizaje y crecimiento profesional.
                    </p>

                    <a href="mailto:mariafernanda@gmail.com"
                       className="btn btn-primary">
                        <i className="bi bi-envelope"></i> Contactarme
                    </a>

                </div>

            </div>
        </section>
    );
}

export default Perfil;