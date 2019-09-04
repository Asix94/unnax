'use strict'

const rp = require('request-promise');

const api = {

    /* informacion de la base url de spotify */
    _baseUrl() {
        return `https://api.spotify.com/v1/`
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
    getListBrowseCategory(country) {
        return this._call('get', `browse/categories/?${country}`, undefined, 'BQD4nQtF_v6V7wFays-uPM4sLUyu80txFRNUwynwSJdS9eFLpLnm0hnCb90IPPMn8XHPofWVKCosaxCqZeo');
    },

    /* lista de playlista por id de categoria */
    getCategoryPlayList(category, country) {
        return this._call('get', `browse/categories/${category}/playlists?${country}`, undefined, 'BQD4nQtF_v6V7wFays-uPM4sLUyu80txFRNUwynwSJdS9eFLpLnm0hnCb90IPPMn8XHPofWVKCosaxCqZeo');
    }

}