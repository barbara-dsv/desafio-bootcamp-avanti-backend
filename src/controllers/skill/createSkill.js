import prisma from "../../PrismaCliente.js";

const createSkill = async (req, res) => {

    const { pessoa_id } = req.params;
    const { titulo, descricao, categoria, nivel } = req.body;
    try {
        const skill = await prisma.conhecimento.create({
            data: { titulo, descricao, categoria, nivel, pessoa_id: Number(pessoa_id) }
        });

        return res.status(201).json(skill);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ mensagem: 'Erro interno do servidor.' });
    }
}

export default createSkill;