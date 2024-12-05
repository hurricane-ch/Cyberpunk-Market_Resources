import { render , html } from "../lib/lit-html.js";
import { getOne } from "../api/itemsApi.js";
import { getUserData } from "../utils/userUtils.js";

const template = (item, isOwner) => html`
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
                <p id="item-description">${item.description}</p>
              </div>
              ${isOwner
          ? html`
              <div id="action-buttons">
                <a href="/edit/${item._id}" id="edit-btn">Edit</a>
                <a href="/delete/${item._id}" id="delete-btn">Delete</a>
              </div>`
          : ''}
           </div>
        </div>
  </section>
`;

export default async function detailsView(ctx) {
    console.log('detailsView function called');
    const itemId = ctx.params.itemId;
    const item = await getOne(itemId);

    const userData = getUserData();
    const isOwner = userData._id === item.ownerId;

    console.log('User ID:', userData._id, typeof userData._id);
    console.log('Owner ID:', item.ownerId, typeof item.ownerId);
    

    render(template(item, isOwner));
}