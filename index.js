import page from "./lib/page.js";
import { navigationMiddleware } from "./middlewares/navigationMiddleware.js";
import createView from "./views/createView.js";
import dashboadrView from "./views/dashboardView.js";
import detailsView from "./views/detailsView.js";
import homeView from "./views/homeView.js";
import loginView from "./views/loginView.js";
import logoutView from "./views/logoutView.js";
import registerView from "./views/registerView.js";

page(navigationMiddleware);

page('/', homeView);
page('/dashboard', dashboadrView);
page('/dashboard/:itemId/details', detailsView);
page('/create', createView);
page('/login', loginView);
page('/register', registerView);
page('/logout', logoutView);

page();