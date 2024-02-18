import mongoose from "mongoose";

const accountSchema = new mongoose.Schema({
    nome: {
        type: String,
    },
    cnpj: {
        type: String,
    },
    dataCriacao: {
        type: Date,
        default: Date.now,
    }
});
export const AccountSchema = new mongoose.model(
    "accounts",
    accountSchema
);

const Account = mongoose.model("accounts", accountSchema);

const newAccount = new Account({
    nome: "Nome da conta",
    cnpj: "CNPJ da conta",
});

newAccount.save((error) => {
    if (error) {
        console.error("Erro ao salvar a conta:", error);
    } else {
        console.log("Conta salva com sucesso!");
    }
});
