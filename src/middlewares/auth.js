import jwt from 'jsonwebtoken';
import prisma from "../PrismaCliente.js";

const auth = async (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) return res.status(401).json({ mensagem: 'Não autorizado' });

    const token = authorization.replace('Bearer', '').trim();
    try {
        const { id } = jwt.verify(token, process.env.HASH);

        const person = await prisma.pessoa.findUnique({
            where: { id: Number(id) }
        });

        if (!person) {
            return res.status(404).json("Pessoa não cadastrada.")
        };

        req.loggedPersonId = person.id;

        next();
    } catch (error) {
        console.error(error);
        return res.status(401).json({ mensagem: 'Não autorizado' });
    }
};


export default auth;
