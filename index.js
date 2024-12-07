import page from "./lib/page.js";
import { navigationMiddleware } from "./middlewares/navigationMiddleware.js";
import { notificationsMiddleware } from "./middlewares/notificationMiddleware.js";
import createView from "./views/createView.js";
import dashboadrView from "./views/dashboardView.js";
import deleteView from "./views/deleteView.js";
import detailsView from "./views/detailsView.js";
import editView from "./views/editView.js";
import homeView from "./views/homeView.js";
import loginView from "./views/loginView.js";
import logoutView from "./views/logoutView.js";
import registerView from "./views/registerView.js";

page(navigationMiddleware);
page(notificationsMiddleware)

page('/', homeView);
page('/dashboard', dashboadrView);
page('/dashboard/:itemId/details', detailsView);
page('/dashboard/:itemId/edit', editView);
page('/dashboard/:itemId/delete', deleteView);
page('/create', createView);
page('/login', loginView);
page('/register', registerView);
page('/logout', logoutView);

page();