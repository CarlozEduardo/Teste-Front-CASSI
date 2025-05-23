import Button from '../button/Button.jsx'
import './ModalDadosContato.css'

const ModalDadosContato = ({
    show,
    handleBack,
    handleConfirm,
    nome,
    email,
    celular,
    setEmail,
    setCelular
}) => {
    return (
        <>
        {show && <div className="modal-backdrop-custom"></div>}
        <div className={`modal fade ${show ? 'show d-block' : 'd-none'}`} tabIndex="-1" role="dialog">
            <div className="modal-dialog modal-dialog-centered modal-md">
                <div className="modal-content p-3 rounded-3 border-0 shadow">
                    <div className="modal-header border-0 pb-0">
                        <h5 className="modal-title fw-bold">Verificar dados de contato</h5>
                    </div>
                    <div className="modal-body">
                        <p className="text-muted">
                            Considerando que você não reconheceu a Notificação de Intermediação Preliminar (NIP),
                            a CASSI entrará em contato para compreender melhor a situação. Por favor, verifique as informações abaixo e, se necessário, atualize-as:
                        </p>

                        <div className="mb-3">
                            <label className="form-label fw-semibold">Beneficiário</label>
                            <input type="text" className="form-control rounded-2" value={nome} disabled />
                        </div>

                        <div className="row">
                            <div className="mb-3 col-md-6">
                                <label className="form-label fw-semibold">E-mail</label>
                                <input
                                    type="email"
                                    className="form-control rounded-2"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <div className="mb-3 col-md-6">
                                <label className="form-label fw-semibold">Celular</label>
                                <input
                                    type="text"
                                    className="form-control rounded-2"
                                    value={celular}
                                    onChange={(e) => setCelular(e.target.value)}
                                />
                            </div>
                        </div>

                    </div>

                    <div className="modal-footer border-0 pt-0 d-flex justify-content-center gap-3">
                        <Button buttonType={1} text="Voltar" onClick={handleBack}></Button>
                        <Button buttonType={2} text="Confirmar dados" onClick={handleConfirm}></Button>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default ModalDadosContato;
