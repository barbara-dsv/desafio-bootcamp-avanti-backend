import prisma from '../../PrismaCliente.js';

const createPerson = async (req, res) => {

    const { nome, email, telefone, descricao } = req.body;
    try {

        const emailExists = await prisma.pessoa.findUnique({
            where: { email }
        });

        if (emailExists) {
            return res.status(400).json({ mensagem: 'Email já cadastrado.' });
        };

        const person = await prisma.pessoa.create({
            data: { nome, email, telefone, descricao }
        })
        return res.status(201).json(person);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ mensagem: 'Erro interno do servidor.' });
    }
}

export default createPerson;