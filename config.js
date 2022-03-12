const Joi = require("joi");
const path = require("path");
const authKeys = require("./keys/auth");

require("dotenv").config({ path: path.resolve(__dirname, ".env") });

const config = {
	client_id: authKeys.client_id,
	redirect_uri: authKeys.redirect_uri,
	client_secret: authKeys.client_secret,
	proxy_url: authKeys.proxy_url
};

const envVarsSchema = Joi.object({
	client_id: Joi.string().required(),
	redirect_uri: Joi.string().required(),
	client_secret: Joi.string().required(),
	proxy_url: Joi.string().required()
});

const { error } = envVarsSchema.validate(config);
if (error) {
	throw new Error(`Config validation error: ${error.message}`);
}

module.exports = config;