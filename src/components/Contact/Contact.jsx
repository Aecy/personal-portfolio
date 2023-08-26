import React, {useEffect, useRef, useState} from "react";
import emailjs from "@emailjs/browser";

import "./contact.css";
import Section from "../../helpers/section";
import {UilArrowRight, UilMailboxAlt, UilMessage, UilWhatsapp} from "@iconscout/react-unicons";

export default function Contact () {
  const [isMailSend, setIsMailSend] = useState(false);
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

    emailjs.sendForm(
      'service_tolny9f',
      'template_4t63jh9',
      form.current,
      'RwZzgOXbXoXG3pioA'
    );
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
              <label className="contact__form-label">Nom</label>
              <input type="text" className="contact__form-control" required name="name" placeholder="Insérer votre nom"/>
            </div>
            <div className="contact__form-group">
              <label className="contact__form-label">Adresse email</label>
              <input type="email" className="contact__form-control" required name="email" placeholder="Insérer votre email"/>
            </div>
            <div className="contact__form-group contact__form-area">
              <label className="contact__form-label">Projet</label>
              <textarea name="project" cols="30" rows="10" required placeholder="Décrivez votre projet..." className="contact__form-control"></textarea>
            </div>

            {isMailSend && (
              <div className="alert" onClick={() => setIsMailSend(false)}>
                Votre message a été transmis à Mavrick, qui y répondra dès que possible.
              </div>
            )}

            <button className="button button--flex">
              Envoyez votre message
              <UilMessage className="button__icon" size="22" style={{rotate: '-50deg'}} />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
