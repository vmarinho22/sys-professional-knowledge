import { login, Users } from "./user";
import { status } from "./status";

const apiDocumentation = {
  openapi: "3.0.1",
  info: {
    version: "1.0.0",
    title: "Professional Knowledge API - Documentation",
    description: "Documentação da API do Professional Knowledge",
  },
  servers: [
    {
      url: "http://localhost:3333/",
      description: "Local Server",
    },
    {
      url: "https://api.mysite.com",
      description: "Production Server",
    },
  ],
  tags: [
    {
      name: "Status",
    },
    {
      name: "Users",
    },
  ],
  paths: {
    status: {
      get: status,
    },
    login: {
      post: login,
    },
    // "users/{id}": {
    //   delete: deleteUser,
    // },
  },
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
    schemas: {
      Users,
    },
  },
};

export { apiDocumentation };
