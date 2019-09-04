'use strict'
require('dotenv').config()

const rp = require('request-promise');
const { CLIENT_ID, CLIENT_SECRET } = process.env
const clientCredential = (CLIENT_ID + ':' + CLIENT_SECRET).encodeBase64();

const api = {

    /* informacion de la base url de spotify */
    _baseUrl() {
        return `https://accounts.spotify.com/api/`
    },

    /* funcion que construira la llamada */
    _call(method, path, body, token) {
        const options = {
            method,
            url: `${this._baseUrl()}/${path}`,
            json: true
        }

        if (body) options.body = body

        if (token) options.headers = { authorization: `Basic ${token}`, 'content-type': 'application/x-www-form-urlencoded' }

        return rp(options);
    },

    login() {
        return this._call('post', `token`, { 'grant_type': 'client_credentials' }, clientCredential);
    }

}