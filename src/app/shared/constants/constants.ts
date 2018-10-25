export const DOMAIN = 'http://52.22.128.37';

export const SERVICING_PORT = `8080`;
export const PLACES_PORT = `3000`;

export const PLACES_DOMAIN = `${DOMAIN}:${PLACES_PORT}`;
export const SERVICING_DOMAIN = `${DOMAIN}:${SERVICING_PORT}`;

export const PASS_PATTERN:RegExp =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;