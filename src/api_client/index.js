'use strict'

const rp = require('request-promise');
const token = 'BQC96UBuebWr-oyPoZPp_S7NaRVqCLVLejRngfmfxbzHK6pIs7i950Z1ILrDUpB19O4SBF3_SPB-1w8Sivs';

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