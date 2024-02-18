import { ConsultAllAccountstwo } from "../routes/consult-all-accountstwo.js";

export class ConsultAllAccountsController {
  async handle(req, res) {
    const response = await new ConsultAllAccountstwo().execute();
    return res.status(200).send(response);
  }
}
