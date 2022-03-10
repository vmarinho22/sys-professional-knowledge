import database from "../config/database/db";
import bcrypt from "bcrypt";

import Security from "./Security";

class User {
  private db: any;

  constructor() {
    this.db = database;
  }

  public async accessValidate(email: string, password: string) {
    const filterEmail: string = Security.filterScripts(email).toLowerCase();
    const filterPassword: string = Security.filterScripts(password);

    try {
      // Knex Query
      const dbData = await this.db
        .select(["id", "password"])
        .table("users")
        .where({ email: filterEmail });

      if (dbData.length === 0)
        return { code: 0, message: "Usuário não encontrado" };

      const resp = await bcrypt.compare(filterPassword, dbData[0].password);
      if (resp)
        return { code: 1, message: "Usuário validado", data: dbData[0].id };
      else return { code: 2, message: "Senha incorreta" };
    } catch (err) {
      return { code: 1, message: "Erro ao inserir dado no sistema" };
    }
  }
}

export default new User();
