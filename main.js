import { html, render } from "lit-html";

const template = () => html`
  <div class="container">
    <img
      src="https://pbs.twimg.com/profile_images/1858456285789978624/6zRI1BEe_400x400.jpg"
      alt="Fungibles Logo"
      class="logo"
    />
    <h1 class="title">fungibles.xyz</h1>
    <p class="description">
      We build for the
      <a
        href="https://x.com/search?q=%23ERC20i"
        class="inline-link"
        target="_blank"
        rel="noopener"
        >#ERC20i</a
      >
      ecosystem
      <a
        href="https://x.com/base"
        class="inline-link"
        target="_blank"
        rel="noopener"
        >@base</a
      >
    </p>
    <div class="links">
      <a
        href="https://generate.fungibles.xyz/"
        class="link"
        target="_blank"
        rel="noopener"
        >Generator</a
      >
      <a
        href="https://t.me/fungibles_ERC20i"
        class="link"
        target="_blank"
        rel="noopener"
        >Telegram</a
      >
      <a
        href="https://github.com/fungiblesxyz"
        class="link"
        target="_blank"
        rel="noopener"
        >GitHub</a
      >
      <a
        href="https://x.com/fungiblesxyz"
        class="link"
        target="_blank"
        rel="noopener"
        >X.com</a
      >
    </div>
  </div>
`;

render(template(), document.querySelector("#app"));
