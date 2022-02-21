import * as KeycloakConnect from "keycloak-connect";
import * as session from 'express-session';

export const memoryStore = new session.MemoryStore();

const config: KeycloakConnect.KeycloakConfig = {
    realm: "demo-realm",
    "auth-server-url": "http://localhost:8180/auth",
    resource: "demo-tm4",
    "ssl-required": "external",
    "confidential-port": 0,
}

const keycloak = new KeycloakConnect({ store: memoryStore }, config);

export default keycloak;
