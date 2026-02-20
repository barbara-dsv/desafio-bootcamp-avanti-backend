import prisma from '../../PrismaCliente.js';
import jwt from 'jsonwebtoken';

const login = async (req, res) => {

    const { email, telefone } = req.body;
    try {
        const person = await prisma.pessoa.findUnique({
            where: { email }
        });

        if (!person) {
            return res.status(400).json({ mensagem: 'Email não cadastrado.' });
        };

        if (person.telefone !== telefone) return res.status(400).json({ mensagem: "Email ou telefone incorretos." })

        const token = jwt.sign({ id: person.id }, process.env.HASH, { expiresIn: '8h' });

        return res.status(200).json({
            person: {
                id: person.id,
                nome: person.nome,
                email: person.email
            },
            token
        });

    } catch (error) {
        console.log(error)
        return res.status(500).json({ mensagem: 'Erro interno do servidor' });
    }
};

export default login;