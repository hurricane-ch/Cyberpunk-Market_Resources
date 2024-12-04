import { request } from "../lib/request.js";

const baseUrl = 'http://localhost:3030/data/cyberpunk';

export const getAll = () => request('GET', `${baseUrl}?sortBy=_createdOn%20desc`);

export const create = (itemData) => request('POST', baseUrl, itemData);