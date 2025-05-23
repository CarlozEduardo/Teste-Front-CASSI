import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Header from '../../components/header/Header.jsx';
import Footer from '../../components/footer/Footer.jsx';
import Button from '../../components/button/Button.jsx';

const Contato = () => {
  const [form, setForm] = useState({
    nome: '',
    email: ''
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };


  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      nomeDestinatario: form.nome,
      emailDestinatario: form.email,
      nomeBeneficiario: 'Leandro Henrique',
      dataAbertura: '29/01/2022',
      linkResposta: `http://localhost:3000/questionario?nome=${form.nome}}`
    };

    emailjs.send('service_k2h59uj', 'template_cu98cdr', templateParams, 'DT6Aq9nl4y_kQUb_j')
      .then((response) => {
        console.log('Email enviado!', response.status, response.text);
        alert('Email enviado com sucesso!');
      })
      .catch((err) => {
        console.error('Erro ao enviar:', err);
        alert('Erro ao enviar email.');
      });
  };

  return (
    <div>
      <Header />

      <main className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">

            <h2 className="mb-4 text-center">Envie uma Notificação</h2>

            <form onSubmit={sendEmail}>
              <div className="mb-3">
                <label className="form-label">Nome:</label>
                <input
                  type="text"
                  name="nome"
                  className="form-control"
                  value={form.nome}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Email:</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <Button text="Enviar Email" buttonType={2} type="submit" />
            </form>

          </div>
        </div>
      </main>


      <Footer />
    </div>
  );
};

export default Contato;
