import React, {useEffect, useRef, useState} from "react";
import emailjs from "@emailjs/browser";

import "./contact.css";
import Section from "../../helpers/section";
import {UilArrowRight, UilMailboxAlt, UilMessage, UilWhatsapp} from "@iconscout/react-unicons";

export default function Contact () {
  const [isMailSend, setIsMailSend] = useState(false);
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    project: ''
  });

  const form = useRef();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsMailSend(false);
    }, 6000);

    return () => {
      clearTimeout(timeout);
    }
  }, [isMailSend]);

  function sendMail (event) {
    event.preventDefault();
    event.target.reset();

    setIsMailSend(true);
    setErrors({name: '', email: '', project: ''});

    emailjs.sendForm(
      'service_tolny9f',
      'template_4t63jh9',
      form.current,
      'RwZzgOXbXoXG3pioA'
    );
  }

  function handleInputValid (event) {
    const value = event.target.value;
    const name = event.target.name;
    let newErrors = { ...errors };

    if (name === 'name') {
      newErrors.name = value.length < 3 ? "Votre nom doit avoir au moins trois caractères." : null;
    } else if (name === 'email') {
      newErrors.email = (/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(value) ? null : "Votre adresse e-mail n'est pas valide.";
    } else if (name === 'project') {
      newErrors.project = value.length <= 10 ? "Le projet doit avoir au moins 10 caractères." : null;
    }

    setErrors(newErrors);
  }

  return (
    <section className="contact section" id="contact">

      <Section title="Me contacter" />

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Contactez moi via</h3>
          <div className="contact__info">
            <div className="contact__card">
              <UilMailboxAlt className="contact__card-icon" />
              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">mthiry14@hotmail.fr</span>

              <a href="mailto:mthiry14@hotmail.fr" className="contact__button">
                Écrivez-moi
                <UilArrowRight className="contact__button-icon" />
              </a>
            </div>
            <div className="contact__card">
              <UilWhatsapp className="contact__card-icon" />
              <h3 className="contact__card-title">WhatsApp</h3>
              <span className="contact__card-data">+33749673614</span>

              <a href="https://api.whatsapp.com/send/?phone=33749673614&text=Bonjour,%20je%20vous%20contact%20pour%20..." target="_blank" className="contact__button">
                Écrivez-moi
                <UilArrowRight className="contact__button-icon" />
              </a>
            </div>
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">Décrivez votre projet</h3>

          <form className="contact__form" ref={form} onSubmit={sendMail}>
            <div className="contact__form-group">
              <label className={`contact__form-label ${errors.name ? 'error' : ''}`}>Nom</label>
              <input
                required
                type="text"
                name="name"
                placeholder="Insérer votre nom"
                className={errors.name ? 'contact__form-control error' : 'contact__form-control'}
                onChange={(e) => handleInputValid(e)}
              />
              {errors.name && (
                <div className="contact__form-error">
                  {errors.name}
                </div>
              )}
            </div>
            <div className="contact__form-group">
              <label className={`contact__form-label ${errors.email ? 'error' : ''}`}>Adresse email</label>
              <input
                required
                type="email"
                name="email"
                placeholder="Insérer votre email"
                className={errors.email ? 'contact__form-control error' : 'contact__form-control'}
                onChange={(e) => handleInputValid(e)}
              />
              {errors.email && (
                <div className="contact__form-error">
                  {errors.email}
                </div>
              )}
            </div>
            <div className="contact__form-group contact__form-area">
              <label className={`contact__form-label ${errors.project ? 'error' : ''}`}>Projet</label>
              <textarea
                required
                name="project"
                cols="30"
                rows="10"
                placeholder="Décrivez votre projet..."
                className={errors.project ? 'contact__form-control error' : 'contact__form-control'}
                onChange={(e) => handleInputValid(e)}
              ></textarea>
              {errors.project && (
                <div className="contact__form-error-big">
                  {errors.project}
                </div>
              )}
            </div>

            {isMailSend && (
              <div className="alert" onClick={() => setIsMailSend(false)}>
                Votre message a été transmis à Mavrick, qui y répondra dès que possible.
              </div>
            )}

            {(errors.project == null && errors.email == null && errors.name == null) ? (
              <button className="button button--flex">
                Envoyez votre message
                <UilMessage className="button__icon" size="22" style={{rotate: '-50deg'}} />
              </button>
            ) : (
              <div className="alert-danger">
                Afin d'envoyer ou de renvoyer votre projet. Veuillez compléter les champs ci-dessus.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
