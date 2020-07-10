require('dotenv/config');

module.exports = {
  type: process.env.type,
  project_id: process.env.project_id,
  private_key_id: process.env.private_key_id,
  private_key: `-----BEGIN PRIVATE KEY-----\n${process.env.private_key_01}\n${process.env.private_key_02}\n${process.env.private_key_03}\n${process.env.private_key_04}\n${process.env.private_key_05}\n${process.env.private_key_06}\n${process.env.private_key_07}\n${process.env.private_key_08}\n${process.env.private_key_09}\n${process.env.private_key_10}\n${process.env.private_key_11}\n${process.env.private_key_12}\n${process.env.private_key_13}\n${process.env.private_key_14}\n${process.env.private_key_15}\n${process.env.private_key_16}\n${process.env.private_key_17}\n${process.env.private_key_18}\n${process.env.private_key_19}\n${process.env.private_key_20}\n${process.env.private_key_21}\n${process.env.private_key_22}\n${process.env.private_key_23}\n${process.env.private_key_24}\n${process.env.private_key_25}\n${process.env.private_key_26}\n-----END PRIVATE KEY-----\n`,
  client_email: process.env.client_email,
  client_id: process.env.client_id,
  auth_uri: process.env.auth_uri,
  token_uri: process.env.token_uri,
  auth_provider_x509_cert_url: process.env.auth_provider_x509_cert_url,
  client_x509_cert_url: process.env.client_x509_cert_url,
};
