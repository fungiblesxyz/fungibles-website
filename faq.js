import { html } from "lit-html";

// FAQ Data
export const faqItems = [
  {
    title: "What is an ERC-20i?",
    content:
      "ERC-20i is an innovative token standard on the Base network that extends the capabilities of traditional ERC-20 tokens by incorporating inscriptions. These inscriptions allow each token to store unique seed data, enabling dynamic and unique digital artifacts to be rendered directly on the blockchain.",
  },
  {
    title: "What is the difference between an ERC-20i and an NFT (ERC-721)?",
    content:
      "Unlike NFTs (ERC-721), which rely on external storage for their unique identifiers, ERC-20i tokens are fully on-chain, hosting dynamic art without needing third-party storage. They offer potential for gamification and are more liquid due to their ERC-20 foundation.",
  },
  {
    title: "What is the difference between BTC Ordinals and ERC-20i tokens?",
    content:
      "BTC Ordinals and ERC-20i tokens both embed unique data on their respective blockchains but differ in functionality. BTC Ordinals inscribe static data permanently onto Bitcoin satoshis, creating immutable digital artifacts. In contrast, ERC-20i tokens on Ethereum can dynamically update their inscribed data, allowing for interactive and evolving art and metadata that can change with token transactions.",
  },
  {
    title: "What is the difference between an ERC-20i and an ERC-404?",
    content:
      "ERC-20i embeds unique data within each token transaction, enhancing both fungibility and uniqueness. In contrast, ERC-404 bonds an NFT to an ERC-20 token to fractionalize ownership of the NFT.",
  },
  {
    title: "Where can I buy ERC-20i tokens?",
    content:
      "ERC-20i tokens can be traded on decentralized exchanges like Uniswap. Because they are based on the ERC-20 standard, they can be easily integrated into existing DeFi platforms and wallets.",
  },
  {
    title: "How does ERC-20i support dynamic data?",
    content:
      "The ERC-20i standard allows tokens to change their inscribed data with each transaction. This means that the digital artifact linked to the token can evolve over time, making each token experience unique and engaging.",
  },
  {
    title: "How do ERC-20i tokens promote creativity in blockchain?",
    content:
      "ERC-20i tokens offer a platform for artists, developers, and creators to embed creative content directly into tokens. This can range from artworks to interactive experiences, all stored and verifiable on the blockchain.",
  },
  {
    title: "How can developers create an ERC-20i token?",
    content:
      "Developers can create an ERC-20i token by forking Todds ERC-20i template on GitHub. This template provides a starting point for building tokens with inscription capabilities, enabling developers to experiment with this innovative standard.",
  },
  {
    title: "Where can I view my inscriptions?",
    content:
      "Visit the Home page and select the token to view and interact with your inscriptions.",
  },
  {
    title: "How do I generate new inscription?",
    content:
      "Generate new inscriptions by changing the balance in your wallet.",
  },
  {
    title: "What is the difference between a dynamic and a stable inscription?",
    content:
      "A dynamic inscription changes with token transactions, while a stable inscription remains unchanged, even when buying or selling tokens, unless a partial amount of the tokens linked to the inscription are moved. Moving the whole amount of tokens linked to a dynamic or stable inscription will preserve the inscription.",
  },
  {
    title: "What is Base?",
    content:
      "Base is a Layer 2 solution enhancing Ethereum's scalability by processing transactions off-chain. This reduces gas fees and improves transaction speed.",
  },
  {
    title: "How do I deposit funds on Base?",
    content:
      "Depositing funds to Base is easy via Coinbase. Simply transfer ETH or other ERC-20 tokens from Coinbase directly to Base, or use a bridge from Ethereum mainnet or another blockchain.",
  },
];

// FAQ Components
const FaqItem = (item, index) => html`
  <div class="faq-item">
    <button
      class="faq-question"
      @click=${(e) => toggleFaq(e, index)}
      aria-expanded="false"
    >
      <span class="faq-question-text">${item.title}</span>
      <span class="faq-icon">+</span>
    </button>
    <div class="faq-answer" hidden>
      <p>${item.content}</p>
    </div>
  </div>
`;

// Toggle FAQ item
const toggleFaq = (e, index) => {
  const button = e.currentTarget;
  const answer = button.nextElementSibling;
  const icon = button.querySelector(".faq-icon");

  const isExpanded = button.getAttribute("aria-expanded") === "true";
  button.setAttribute("aria-expanded", !isExpanded);
  answer.hidden = isExpanded;
  icon.textContent = isExpanded ? "+" : "-";
};

export const FaqPage = (Footer) => {
  return html`
    <div class="container faq-container">
      <a href="#" class="back-link">← Back to Home</a>
      <h1 class="title">FAQ</h1>
      <div class="faq-list">
        ${faqItems.map((item, index) => FaqItem(item, index))}
      </div>
      ${Footer()}
    </div>
  `;
};
