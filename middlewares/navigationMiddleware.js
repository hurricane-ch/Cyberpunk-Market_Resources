import navigationView from "../views/navigationView.js"
export const navigationMiddleware = (ctz, next) => {
    navigationView();
    next();
}