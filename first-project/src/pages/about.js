import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

export default function About() {
  return (
    <Layout>
      <main className="page">
        <section className="about-page">
          <article>
            <h2>Laborum quis ea mollit ipsum irure culpa dolore.</h2>
            <p>
              Culpa id laborum et aliquip pariatur adipisicing fugiat duis aute
              est adipisicing elit. Voluptate consequat proident officia
              reprehenderit id consectetur et. Fugiat velit id aute pariatur
              voluptate in magna eu incididunt tempor cupidatat sunt. Consequat
              exercitation sint minim ea.
            </p>
            <p>
              Occaecat aute duis labore pariatur magna nulla in consequat
              exercitation excepteur quis consequat. Adipisicing veniam
              consectetur reprehenderit velit est aliquip amet minim sunt anim.
              Ad duis aute dolor sunt consectetur excepteur nulla in et.
            </p>
            <Link to="/contact" className="btn">
              Contact
            </Link>
          </article>
          <StaticImage
            src="../assets/images/about.jpeg"
            alt="food"
            className="about-img"
            placeholder="tracedSVG"
          />
        </section>
      </main>
    </Layout>
  )
}
