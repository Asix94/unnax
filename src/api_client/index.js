'use strict'

const rp = require('request-promise');
const token = 'BQAoPecL9O15USBg4WI-dZU_dSHr4bNEi9dM5onP2iotMKrNFCrbmL2Z2NVxsN8GwSBdTPw5hlspuHaUmwc';

const api = {

    /* informacion de la base url de spotify */
    _baseUrl() {
        return `https://api.spotify.com/v1`
    },

    /* funcion que construira la llamada */
    _call(method, path, body, token) {
        const options = {
            method,
            url: `${this._baseUrl()}/${path}`,
            json: true
        }

        if (body) options.body = body

        if (token) options.headers = { authorization: `Bearer ${token}` }

        return rp(options);
    },

    /* lista de categorias */
    getListBrowseCategory() {
        return this._call('get', `browse/categories?country=ES`, undefined, token);
    },

    /* lista de playlista por id de categoria */
    getCategoryPlayList(category) {
        return this._call('get', `browse/categories/${category}/playlists?country=ES&limit=10`, undefined, token);
    }

}

export default api;