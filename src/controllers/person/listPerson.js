import prisma from '../../PrismaCliente.js';

const listPerson = async (req, res) => {
    try {
        const person = await prisma.pessoa.findMany({
            select: { id: true, nome: true, email: true, conhecimentos: true }
        })

        return res.json(person);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ mensagem: 'Erro interno do servidor.' });
    }
};

export default listPerson;