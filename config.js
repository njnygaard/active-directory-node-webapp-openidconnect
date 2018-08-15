// Don't commit this file to your public repos. This config is for first-run
//
exports.creds = {
    returnURL: 'http://localhost:3000/auth/openid/return',
    realm: 'd0e180a3-2a33-49da-8c71-297a09446dfa', // Tenant ID
    // clientID: 'c9655d1d-f356-46a7-afe1-431c0d6eeb37',
    // clientID: 'd0e180a3-2a33-49da-8c71-297a09446dfa', // Splice Machine Tenant ID
    // clientID: 'ea1ecbf0-8e07-4b74-8922-df278a2e6106',
    clientID: 'ea1ecbf0-8e07-4b74-8922-df278a2e6106',
    clientSecret: '4+47R51b9PJA15G6G5C1ZP7oayV0IMKNZ5lrYN6pVIc=', // if you are doing code or id_token code
    issuer: undefined,
    identityMetadata: 'https://login.microsoftonline.com/common/.well-known/openid-configuration', // For using Microsoft you should never need to change this.
    skipUserProfile: true, // for AzureAD should be set to true.
    responseType: 'id_token code', // for login only flows use id_token. For accessing resources use `id_token code`
    // responseMode: 'query', // For login only flows we should have token passed back to us in a POST
    responseMode: 'form_post', // For login only flows we should have token passed back to us in a POST
    scope: ['email', 'profile'], // additional scopes you may wish to pass
    validateIssuer: false
};
