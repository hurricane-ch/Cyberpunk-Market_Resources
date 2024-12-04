import { render , html } from "../lib/lit-html.js";

const template = () => html`
        <section id="hero">
          <img src="./images/home.png" alt="home" />
          <p>We know who you are, we will contact you</p>
        </section>
`;

export default async function homeView(ctx) {
    render(template());
}