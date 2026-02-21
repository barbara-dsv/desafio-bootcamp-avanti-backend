import prisma from '../../database/PrismaCliente.js';

const detailsSkill = async (req, res) => {
    const { id } = req.params;
    try {
        const skill = await prisma.conhecimento.findUnique({ where: { id: Number(id) } });

        if (!skill) {
            return res.status(404).json("Conhecimento não encontrado.");
        };


        const detailsSkill = await prisma.conhecimento.findUnique({
            where: { id: Number(id) },
            include: {
                pessoa: true
            }
        });

        return res.json(detailsSkill);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ mensagem: 'Erro interno do servidor.' });
    }
};

export default detailsSkill;