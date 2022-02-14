const getBaseUrl = () => {
    if (window.location.hostname == 'localhost') {
        return window.location.protocol + '//' + window.location.hostname + ':3001/';
    }
    return window.location.protocol + '//' + window.location.hostname + '/';
}


const BASE_URL = getBaseUrl();

export const PRODUCTS = (limit, page) => BASE_URL + 'products?_limit=' + limit + '&_page=' + page;

export const COUNTS = BASE_URL + 'totalCount';

export const SINGLE_PRODUCT = (id) => BASE_URL + 'products/' + id;

export const ORDER = BASE_URL + 'order'