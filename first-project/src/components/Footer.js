import React from "react"

export default function Footer() {
  return (
    <footer className="page-footer">
      <p>
        &copy; {new Date().getFullYear()} <span>Recipe Site</span>. Built with{" "}
        <a href="https://www.gatsbyjs.com/">Gatsby</a>
      </p>
    </footer>
  )
}
