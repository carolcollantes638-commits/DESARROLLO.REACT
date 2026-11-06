
function Footer() {
    return (
        <footer className="container-fluid bg-dark text-white text-center py-4">

            <h5>Carol Estefani Collantes Dominguez</h5>

            <p>
                Gracias por visitar mi hoja de vida.
            </p>

            <div>

                <a href="https://www.linkedin.com/"
                   className="text-white mx-2"
                   target="_blank"
                   rel="noreferrer">
                    <i className="bi bi-linkedin fs-4"></i>
                </a>

                <a href="https://www.instagram.com/"
                   className="text-white mx-2"
                   target="_blank"
                   rel="noreferrer">
                    <i className="bi bi-instagram fs-4"></i>
                </a>

                <a href="mailto:mariafernanda@gmail.com"
                   className="text-white mx-2">
                    <i className="bi bi-envelope fs-4"></i>
                </a>

            </div>

            <p className="mt-3 mb-0">
                © 2026 - Todos los derechos reservados.
            </p>

        </footer>
    );
}

export default Footer;