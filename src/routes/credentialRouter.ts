import { Router } from 'express';
import * as controllers from '../controller/credentialController.js';
import * as schemas from '../schemas/index.js';
import validateSchemasMiddleware from '../middlewares/validateSchemasMiddleware.js';
import jwtValidateMiddleware from '../middlewares/jwtValidateMiddleware.js';

const credentialRoute = Router();

credentialRoute.post("/insert/credential", jwtValidateMiddleware, validateSchemasMiddleware(schemas.createCredentialSchemaValidate), controllers.createCredential);

export default credentialRoute;