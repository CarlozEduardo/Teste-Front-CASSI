import imagemSecretario from "../../assets/images/imagem-secretario.jpg";
import './QuestionarioNip.css'
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Button from "../../components/button/Button";
import MessageAlert from "../../components/message-alert/MessageAlert";
import { useState } from "react";
import ModalDadosContato from "../../components/modal-dados-contato/ModalDadosContato";
import { useSearchParams } from 'react-router-dom';

const QuestionarioNip = () => {
  const [searchParams] = useSearchParams();
  const nomeUser = searchParams.get('nome');
  const [step, setStep] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [alertType, setAlertType] = useState(null);
  const [text, setText] = useState('');
  const [selectedAction, setSelectedAction] = useState(null);

  const [nome, setNome] = useState("Leandro Henrique");
  const [email, setEmail] = useState("leandro.henrique@gmail.com");
  const [celular, setCelular] = useState("(61) 9 9999-9999");


  const handleButtonClick = (action) => {
    setSelectedAction(action);
    setShowModal(true);
  };

  const handleBack = () => {
    setShowModal(false)
    setStep(2)
  }

  const handleConfirm = () => {
    setShowModal(false)

    if (selectedAction === "naoReconheceInterlocutor") {
      handleNaoReconheceInterlocutor();
    } else if (selectedAction === "naoReconhece") {
      handleNaoReconhece();
    }

    setStep(3)
  }

  const handleNaoReconheceInterlocutor = () => {
    setText([
      "Interlocutor ",
      <strong>NÃO RECONHECIDO</strong>,
      " e abertura da NIP ",
      <strong>NÃO RECONHECIDA</strong>,
      " pelo usuário."
    ]);
    setAlertType("danger");
    setStep(3)
  };

  const handleNaoReconhece = () => {
    setText([
      "Interlocutor ",
      <strong>RECONHECIDO</strong>,
      " e abertura da NIP ",
      <strong>NÃO RECONHECIDA</strong>,
      " pelo usuário."
    ]);
    setAlertType("danger");
    setStep(3)
  };

  const handleReconhece = () => {
    setText([
      "Abertura da NIP ",
      <strong>RECONHECIDA</strong>,
      " pelo usuário"
    ]);
    setAlertType("success");
    setStep(3)
  };

  return (
    <>
      <Header />
      <div className="container mt-5 bg-white p-4">
        <div className="row">
          <div className="col-md-8">
            <h5 className="fw-bold text-azul-escuro">Olá, {nomeUser}</h5>
            <p>
              Foi realizada a abertura de uma Notificação de Intermediação
              Preliminar (NIP) em seu nome.
            </p>

            <h6 className="fw-bold text-azul-escuro mt-5">Dados do notificação</h6>
            <hr />
            <div className="row mb-3">
              <div className="col-6">
                <small className="fw-bold">Beneficiário</small>
                <p className="mb-0">Leandro Henrique</p>
              </div>
              <div className="col-6">
                <small className="fw-bold">Interlocutor</small>
                <p className="mb-0">Leandro Henrique</p>
              </div>
            </div>
            <div className="mb-4">
              <small className="fw-bold">Data de abertura</small>
              <p className="mb-0">29/01/2022</p>
            </div>

            {text && <MessageAlert text={text} alertType={alertType} />}

            <hr />

            <div className="mt-3">
              {step === 3 ? <div className="align-items-center">
                <i className="verde me-2 bi bi-check-circle-fill"></i>
                <strong>Obrigado pela resposta!</strong>
              </div> : step === 2 ?
                <>
                  <h6 className="fw-bold">Reconhece o interlocutor?</h6>
                  <div className="d-flex gap-2 my-4">
                    <Button onClick={() => handleButtonClick("naoReconheceInterlocutor")} buttonType={1} text="Não" />
                    <Button onClick={() => handleButtonClick("naoReconhece")} buttonType={2} text="Sim" />
                  </div>
                </>
                :
                <>
                  <h6 className="fw-bold">Reconhece esta NIP?</h6>
                  <div className="d-flex gap-2 my-4">
                    <Button onClick={() => setStep(2)} buttonType={1} text="Não reconheço" />
                    <Button onClick={() => handleReconhece()} buttonType={2} text="Sim, foi aberto por mim" />
                  </div>
                </>
              }
            </div>
          </div>

          <div className="col-md-4">
            <h5 className="fw-bold text-azul-escuro">
              Por que é importante que você responda esse questionário?
            </h5>
            <img
              src={imagemSecretario}
              alt="Atendimento"
              className="img-fluid rounded my-3"
            />
            <p>
              Na CASSI, buscamos aprimorar continuamente nossos serviços e
              métodos de atendimento. Nosso objetivo é acelerar o processo de
              análise das suas solicitações e torná-lo mais eficiente. Ao
              responder ao questionário, você nos ajuda a alcançar maior
              assertividade e rapidez no atendimento às suas necessidades.
            </p>
          </div>
        </div>
      </div>
      <Footer />
      {showModal && 
      <ModalDadosContato 
      show={showModal} 
      handleBack={handleBack} 
      handleConfirm={handleConfirm} 
      nome={nome}
      email={email}
      celular={celular}
      setCelular={setCelular}
      setEmail={setEmail}
      />}
    </>
  );
};

export default QuestionarioNip;