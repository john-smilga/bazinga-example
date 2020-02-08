import React from "react";
import { createGlobalStyle } from "styled-components";
import Contact from "./components/contacts/contacts";
import Categories from "./components/categories/categories";
const GlobalStyle = createGlobalStyle`
  /* 
====== 
Fonts
======
*/
@import url("https://fonts.googleapis.com/css?family=Cardo:400,700|Great+Vibes&display=swap");

/* 
====== 
Variables 
======
*/
:root {
  --cl-primary: #38bba3;
  --cl-hover:#32a792;
  --cl-white:#fff;
  --cl-black:#222;
  --spacing:3px;
  --trans:all 0.3s linear;
  --ft-body: "Cardo", serif;
  --ft-title: "Great Vibes", cursive;}
/* 
====== 
Global Styles 
======
*/
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: var(--ft-body);
  color: var(--cl-black);
  background: var(--cl-white);
  line-height: 1.5;
  font-size: 1rem;
  font-weight: 400;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  margin-bottom: 1rem;
  letter-spacing: var(--spacing);
  text-transform: capitalize;
}
h1{
  font-size:2.5rem
}
h2 {
  font-size: 2rem;
}
h3 {
  font-size: 1.75rem;
}
h4 {
  font-size: 1.5rem;
}
h5 {
  font-size: 1.25rem;
}
p {
  letter-spacing: var(--spacing);
  margin-bottom: 0.5rem;
  line-height: 1.8;
}
ul {
  list-style-type: none;
}
a {
  text-decoration: none;
  color: var(--cl-black);
}
img {
  width: 100%;
  display: block;
}
/* global classes */
.section{
  padding:4rem 0;
}
.icon-wrapper {
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Contact />
      <Categories />
    </>
  );
}

export default App;
