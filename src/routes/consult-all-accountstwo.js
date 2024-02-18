import { RepositoryAccounttwo } from './repository-accounts-two.js';

export class ConsultAllAccountstwo {
  async execute() {
    const response = await new RepositoryAccounttwo().findAll();
    return response;
  }
}
