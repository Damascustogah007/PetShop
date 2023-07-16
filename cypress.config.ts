import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl : 'https://pet-shop.buckhill.com.hr',
    env: {
      username : 'admin@buckhill.co.uk',
      password : 'admin',
      invalid_username: 'admin@buckhill.co.uk123',
      invalid_password: 'admin123',
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
