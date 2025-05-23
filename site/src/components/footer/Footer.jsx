import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';
import logo from '../../assets/logos/logo-cassi.png';

const Footer = () => {
    return (
        <footer className="footer bg-custom-blue text-white pt-5 pb-2 mt-5">
            <div className="container">
                <div className='row justify-content-between align-items-center'>
                    <div className="col-12 col-md-2 mb-3 d-flex justify-content-center justify-content-md-start">
                        <img
                            src={logo}
                            alt="CASSI Logo"
                            className="img-fluid"
                            style={{ maxWidth: "90px" }}
                        />
                    </div>

                    <div className="col-12 col-md-2 text-center text-md-end">
                        <a href="#" className="text-white me-3">
                            <i className="bi bi-facebook fs-5"></i>
                        </a>
                        <a href="#" className="text-white me-3">
                            <i className="bi bi-linkedin fs-5"></i>
                        </a>
                        <a href="#" className="text-white">
                            <i className="bi bi-instagram fs-5"></i>
                        </a>
                    </div>
                </div>

                <hr
                    className="mb-4"
                    style={{
                        borderTop: '2px solid rgb(255, 238, 7)' 
                    }}
                />  


                <div className="row justify-content-between text-start">
                    <div className="col-6 col-md-2 mb-4">
                        <h6 className="fw-semibold fs-4">Home</h6>
                    </div>

                    <div className="col-6 col-md-2 mb-4">
                        <h6 className="fw-semibold fs-4">Conheça a CASSI</h6>
                        <ul className="list-unstyled small lh-lg">
                            <li>Institucional</li>
                            <li>Informações financeiras</li>
                            <li>Governança corporativa</li>
                            <li>Como trabalhamos</li>
                            <li>Faça parte da nossa equipe</li>
                        </ul>
                    </div>

                    <div className="col-6 col-md-2 mb-4">
                        <h6 className="fw-semibold fs-4">Nossos Planos</h6>
                        <ul className="list-unstyled small lh-lg">
                            <li>Plano CASSI Essencial</li>
                            <li>Plano CASSI Família</li>
                            <li>Plano CASSI Vida</li>
                            <li>Quero contratar</li>
                            <li>Plano de Associados</li>
                        </ul>
                    </div>

                    <div className="col-6 col-md-3 mb-3">
                        <h6 className="fw-semibold fs-4">Já tenho um plano CASSI</h6>
                        <ul className="list-unstyled small lh-lg">
                            <li>Cobertura do meu plano</li>
                            <li>Cronogramas</li>
                            <li>Telemedicina</li>
                        </ul>
                    </div>

                    <div className="col-6 col-md-2 mb-4">
                        <h6 className="fw-semibold fs-4">CliniCASSI</h6>
                        <ul className="list-unstyled small lh-lg">
                            <li>Atenção Primária Saúde</li>
                            <li>Localize sua CliniCASSI</li>
                        </ul>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
