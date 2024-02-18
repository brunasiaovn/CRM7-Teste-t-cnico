const { AccountSchema } = require("./schema-account-two");

export class RepositoryAccounttwo {
    async create(data) {
        return await AccountSchema.create({ data });
    }

    async delete(id) {
        return await AccountSchema.deleteOne({ _id: id });
    }

    async fetch(id) {
        return await AccountSchema.findOne({ _id: id });
    }

    async findAll() {
        return await AccountSchema.find();
    }
}




