const login = {
  tags: ["Users"],
  description: "Rota de autenticação do usuário",
  operationId: "login",
  requestBody: {
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: {
            user: {
              type: "string",
              example: "email@email.com",
              required: true,
            },
            password: {
              type: "string",
              example: "password123",
              required: true,
            },
          },
        },
      },
    },
    required: true,
  },
  responses: {
    "200": {
      description: "Usuário foi validado com sucesso!",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              status: {
                type: "number",
                example: 1,
              },
              response: {
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    example: "Usuário validado",
                  },
                  token: {
                    type: "string",
                    example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NDY4NDE4MzEsImRhdGEiOiJwaWdlb25meV9zeXN0ZW0iLCJp....",
                  },
                  data: {
                    type: "object",
                    properties: {
                      userId: {
                        type: "number",
                        example: 1,
                      },
                    }
                  },
                }
              },
            },
          },
        },
      },
    },
    "422": {
      description: "Alguma informação não foi enviada",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              status: {
                type: "number",
                example: 0,
              },
              response: {
                type: "string",
                example: "Senha vazia",
              },
            },
          },
        },
      },
    },
    "401": {
      description: "Usuário não validado!",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              status: {
                type: "number",
                example: 0,
              },
              response: {
                type: "string",
                example: "Usuário não encontrado",
              },
            },
          },
        },
      },
    },
  },
};

const Users = {
  type: "object",
  properties: {
    fullName: {
      type: "string",
      example: "John Snow",
    },
    email: {
      type: "string",
      example: "john.snow@email.com",
    },
    password: {
      type: "string",
      description: "unencrypted user's password",
      example: "!1234aWe1Ro3$#",
    },
    enabled: {
      type: "boolean",
      example: true,
    },
    role: {
      type: "string",
      example: "605636683f6e29c81c8b2db0",
    },
  },
};

export { login, Users };


// Anotações

//   parameters: [
//     {
//       name: "id",
//       in: "path",
//       description: "User ID",
//       required: true,
//       type: "string",
//     },
//   ],

// security: [
//   {
//     bearerAuth: [],
//   },
// ],