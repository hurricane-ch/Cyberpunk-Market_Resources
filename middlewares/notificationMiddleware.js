import { html, baseRender } from "../lib/lit-html.js";

const errorBoxElement = document.getElementById('errorBox');

const template = (message) => html`
        <span class="msg">${message}</span>
`;

export const notificationsMiddleware = (ctx, next) => {
    ctx.showNotification = (message) => {
        baseRender(template(message), errorBoxElement);
        errorBoxElement.style.display = 'block';

        setTimeout(() => {
            errorBoxElement.style.display = 'none';
        }, 3000);
    };

    next();
};