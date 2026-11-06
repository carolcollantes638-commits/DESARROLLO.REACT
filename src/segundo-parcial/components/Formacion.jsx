
function Formacion() {
    return (
        <section id="formacion" className="container py-5">

            <h2 className="text-center text-primary mb-4">
                Formación académica
            </h2>

            <div className="row">

                <div className="col-md-6 mb-3">

                    <div className="card h-100 shadow">

                        <div className="card-body">

                            <h5 className="card-title">
                                Ingeniería de Sistemas
                            </h5>

                            <p className="card-text">
                                Universidad Francisco de Paula Santander Ocaña.
                            </p>

                            <span className="badge bg-success">
                                2026 - Actualmente
                            </span>

                        </div>
                    </div>
                </div>

                <div className="col-md-6 mb-3">

                    <div className="card h-100 shadow">

                        <div className="card-body">

                            <h5 className="card-title">
                                Educación secundaria
                            </h5>

                            <p className="card-text">
                                Bachillerato académico.
                            </p>

                            <span className="badge bg-warning text-dark">
                                Finalizado
                            </span>

                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Formacion;