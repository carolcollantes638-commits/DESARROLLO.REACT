
function Habilidades() {
    return (
        <section id="habilidades" className="container-fluid bg-light py-5">

            <div className="container">

                <h2 className="text-center text-primary mb-4">
                    Mis habilidades
                </h2>

                <div className="row">

                    <div className="col-md-6">

                        <h4>Habilidades técnicas</h4>

                        <p>HTML</p>
                        <div className="progress mb-3">
                            <div className="progress-bar bg-primary"
                                style={{ width: "75%" }}>
                                75%
                            </div>
                        </div>

                        <p>CSS</p>
                        <div className="progress mb-3">
                            <div className="progress-bar bg-success"
                                style={{ width: "60%" }}>
                                60%
                            </div>
                        </div>

                        <p>Java</p>
                        <div className="progress mb-3">
                            <div className="progress-bar bg-warning"
                                style={{ width: "50%" }}>
                                50%
                            </div>
                        </div>

                    </div>

                    <div className="col-md-6">

                        <h4>Habilidades personales</h4>

                        <span className="badge bg-primary m-2">
                            Comunicación
                        </span>

                        <span className="badge bg-success m-2">
                            Trabajo en equipo
                        </span>

                        <span className="badge bg-danger m-2">
                            Responsabilidad
                        </span>

                        <span className="badge bg-warning text-dark m-2">
                            Creatividad
                        </span>

                    </div>

                </div>
            </div>
        </section>
    );
}

export default Habilidades;