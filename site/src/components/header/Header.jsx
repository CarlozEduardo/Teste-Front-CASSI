import logo from "../../assets/logos/logo-cassi.png";
import iconeAtendimento from "../../assets/images/icone-telemedicina.png";
import './Header.css'
import Button from "../../components/button/Button";

const Header = () => {
    return (
        <>
            <header className="bg-white shadow-sm mb-4 border-bottom py-3 d-flex d-lg-none justify-content-between align-items-center container">
                <img src={logo} alt="CASSI Logo" style={{ height: "45px" }} />
                <Button buttonType={2} text="Fazer login" />
            </header>
            <header className="d-none d-lg-block bg-white shadow-sm mb-4 border-bottom py-3">
                <div className="container mt-2 d-flex justify-content-between align-items-center flex-wrap">
                    <img src={logo} alt="CASSI Logo" style={{ height: "45px" }} />

                    <div className="input-group w-auto me-3">
                        <span className="input-group-text bg-white border-end-0">
                            <i className="bi bi-search"></i>
                        </span>
                        <input
                            type="text"
                            className="form-control border-start-0"
                            placeholder="Faça sua busca aqui"
                        />
                    </div>

                    <div className="d-flex align-items-center me-3">
                        <span className="me-2 text-muted">Siga a CASSI nas redes sociais:</span>
                        <a href="#" className="text-dark me-2">
                            <i className="bi bi-facebook fs-5"></i>
                        </a>
                        <a href="#" className="text-dark me-2">
                            <i className="bi bi-linkedin fs-5"></i>
                        </a>
                        <a href="#" className="text-dark">
                            <i className="bi bi-instagram fs-5"></i>
                        </a>
                    </div>

                    <div className="d-flex align-items-center me-3">
                        <img src={iconeAtendimento} alt="Ícone Atendimento" style={{ height: "35px", marginRight: "8px" }} />
                        <span>Lorem Ipsum</span>
                    </div>

                    <Button buttonType={2} text="Fazer login" />

                </div>

                <hr />

                <nav className="container">
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <a href="#" className="nav-link text-dark">Home</a>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-dark" href="#" data-bs-toggle="dropdown">
                                Conheça a CASSI <i className="bi bi-chevron-down ms-1"></i>
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Faça parte da nossa equipe</a></li>
                                <li><a className="dropdown-item" href="#">Governança corporativa</a></li>
                                <li><a className="dropdown-item" href="#">Institucional</a></li>
                                <li><a className="dropdown-item" href="#">Informações financeiras</a></li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-dark" href="#" data-bs-toggle="dropdown">
                                Nossos Planos <i className="bi bi-chevron-down ms-1"></i>
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">CLASSI Associados</a></li>
                                <li><a className="dropdown-item" href="#">CLASSI Essencial</a></li>
                                <li><a className="dropdown-item" href="#">CLASSI Família</a></li>
                                <li><a className="dropdown-item" href="#">Saiba mais</a></li>
                                <li><a className="dropdown-item" href="#">Quero contratar</a></li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-dark" href="#" data-bs-toggle="dropdown">
                                Já tenho um plano CASSI <i className="bi bi-chevron-down ms-1"></i>
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Cobertura do seu plano</a></li>
                                <li><a className="dropdown-item" href="#">Contratos</a></li>
                                <li><a className="dropdown-item" href="#">Encontrar credenciado</a></li>
                                <li><a className="dropdown-item" href="#">Reembolso - Documentos</a></li>
                                <li><a className="dropdown-item" href="#">Serviço online</a></li>
                                <li><a className="dropdown-item" href="#">Telesaúde</a></li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-dark" href="#" data-bs-toggle="dropdown">
                                CliniCASSI <i className="bi bi-chevron-down ms-1"></i>
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Localize sua CliniCASSI</a></li>
                                <li><a className="dropdown-item" href="#">Programas</a></li>
                            </ul>
                        </li>

                        <li className="nav-item">
                            <a href="#" className="nav-link text-dark">Fale com a CASSI</a>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default Header;
