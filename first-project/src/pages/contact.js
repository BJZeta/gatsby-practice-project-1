import React from "react"
import Layout from "../components/Layout"

export default function Contact() {
  return (
    <Layout>
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want to Get in Touch?</h3>
            <p>
              I'm baby poutine tofu roof party kinfolk, flexitarian microdosing
              ugh salvia. Cray blue bottle live-edge enamel pin, ennui pabst
              hoodie. Stumptown direct trade bitters XOXO asymmetrical,
              shoreditch la croix shaman knausgaard skateboard.
            </p>
            <p>
              Succulents hella cloud bread subway tile fingerstache pok pok ugh
              3 wolf moon pug seitan.
            </p>
            <p>Blue bottle fingerstache asymmetrical XOXO.</p>
          </article>
          <article>
            <form className="form contact-form">
              <div className="form-row">
                <label htmlFor="name">Your Name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">Your Email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">Message</label>
                <input type="text" name="message" id="message" />
              </div>
              <button type="submit" className="btn block">
                Submit
              </button>
            </form>
          </article>
        </section>
      </main>
    </Layout>
  )
}
