import { html, render } from "lit-html";
import { FaqPage } from "./faq.js";

// Shared Components
const Footer = () => html`
  <footer class="footer">
    <div class="social-links">
      <a
        href="https://t.me/fungibles_ERC20i"
        class="social-link"
        target="_blank"
        rel="noopener"
        >Telegram</a
      >
      <a
        href="https://github.com/fungiblesxyz"
        class="social-link"
        target="_blank"
        rel="noopener"
        >GitHub</a
      >
      <a
        href="https://x.com/fungiblesxyz"
        class="social-link"
        target="_blank"
        rel="noopener"
        >X.com</a
      >
      <a
        href="https://app.safe.global/balances?safe=base:0x45083345B7E20d9916dDa046344Ec518bf9e21D0"
        class="social-link"
        target="_blank"
        rel="noopener"
        >Support Us</a
      >
    </div>
  </footer>
`;

// Page Components
const homePage = () => html`
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
    <div class="main-links">
      <a
        href="https://generate.fungibles.xyz/"
        class="action-link"
        target="_blank"
        rel="noopener"
      >
        <img src="/icons/flash.svg" alt="" class="icon" />
        Generator
      </a>
      <a
        href="https://t.me/FungiblesBot"
        class="action-link"
        target="_blank"
        rel="noopener"
      >
        <img src="/icons/bot.svg" alt="" class="icon" />
        Telegram Bot
      </a>
      <a
        href="https://github.com/fungiblesxyz/fungibles-agents/tree/main/0x20i"
        class="action-link"
        target="_blank"
        rel="noopener"
      >
        <img src="/icons/0x20i.png" alt="" class="icon" />
        0x20i GitHub
      </a>
      <a
        href="https://x.com/0x20i"
        class="action-link"
        target="_blank"
        rel="noopener"
      >
        <img src="/icons/0x20i.png" alt="" class="icon" />
        0x20i X.com
      </a>
      <a href="#faq" class="action-link">
        <img src="/icons/question.svg" alt="" class="icon" />
        FAQ
      </a>
    </div>
    ${Footer()}
  </div>
`;

// Routing
const routes = {
  home: homePage,
  faq: () => FaqPage(Footer),
};

let currentPage = window.location.hash.slice(1) || "home";

const handleRoute = () => {
  currentPage = window.location.hash.slice(1) || "home";
  render(routes[currentPage](), document.querySelector("#app"));
};

// Initialize
window.addEventListener("hashchange", handleRoute);
handleRoute();
