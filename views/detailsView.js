import { render , html } from "../lib/lit-html.js";
import { getOne } from "../api/itemsApi.js";

const template = (item) => html`
  <section id="details">
          <div id="details-wrapper">
            <div>
              <img id="details-img" src=${item.imageUrl} alt=${item.item} />
              <p id="details-title">${item.item}</p>
            </div>
            <div id="info-wrapper">
              <div id="details-description">
                <p class="details-price">Price: €${item.price}</p>
                <p class="details-availability"> ${item.availability}</p>
                <p class="type">${item.type}</p>
                <p id="item-description">${item.desription}</p>
              </div>
              <div id="action-buttons">
                <a href="" id="edit-btn">Edit</a>
                <a href="" id="delete-btn">Delete</a>
              </div>
            </div>
          </div>
        </section>
`;

export default async function detailsView(ctx) {
    const itemId = ctx.params.itemId;
    const item = await getOne(itemId);
    render(template(item));
}