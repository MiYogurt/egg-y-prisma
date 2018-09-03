const { Prisma } = require('prisma-binding')
const path = require('path')

module.exports = app => {
    app.prisma = new Prisma({
        ...app.config.prisma,
        typeDefs: path.resolve(app.config.baseDir, app.config.prisma.typeDefs)
    })
};