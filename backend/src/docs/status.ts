const status = {
  tags: ["Status"],
  description: "Verifica a disponibilidade da API",
  operationId: "status",
  responses: {
    "200": {    
      description: "Internal Server Error",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              status: {
                type: "number",
                "example": 1
              },
              response: {
                type: "string",
                example: "API Online e operando!",
              },
            },
          },
        },
      },
    },
  },
};

export { status };
