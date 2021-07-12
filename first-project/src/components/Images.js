import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const Images = () => {
  return (
    <Wrapper>
      <article>
        <StaticImage
          src="../assets/images/recipes/recipe-1.jpeg"
          alt="food"
          placeholder="tracedSVG"
          layout="constrained"
          className="example-img"
          as="section"
        />
        <h2>Gatsby Image</h2>
      </article>
      <article>
        <StaticImage
          src="../assets/images/recipes/recipe-1.jpeg"
          alt="food"
          placeholder="tracedSVG"
          layout="constrained"
          className="example-img"
          as="section"
        />
        <h2>Gatsby Image</h2>
      </article>
      <article>
        <StaticImage
          src="../assets/images/recipes/recipe-1.jpeg"
          alt="food"
          placeholder="tracedSVG"
          layout="constrained"
          className="example-img"
          as="section"
        />
        <h2>Gatsby Image</h2>
      </article> 
    </Wrapper>
  )
}

const Wrapper = styled.section`
  width: 70vw;
  margin: 0 auto;
  display: grid;
  text-align: center;
  gap: 2rem;
  article {
    border: 2px solid black;
  }
  .example-img {
    border-radius: 1rem;
  }
  @media (min-width: 992px) {
      grid-template-columns: 1fr 1fr 1fr;
  }
`

export default Images
