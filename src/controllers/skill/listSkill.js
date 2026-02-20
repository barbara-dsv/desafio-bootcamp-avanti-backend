import prisma from "../../PrismaCliente.js";

const listSkill = async (req, res) => {
    const { page = 1, limit = 5 } = req.query;

    const take = Number(limit);
    const skip = (Number(page) - 1) * take;
    try {

        const skills = await prisma.conhecimento.findMany({
            skip,
            take,
            orderBy: {
                id: 'asc'
            }
        });

        const total = await prisma.conhecimento.count();

        return res.json({
            total,
            page: Number(page),
            totalPages: Math.ceil(total / take),
            data: skills
        });


    } catch (error) {
        console.log(error);
        return res.status(500).json({ mensagem: 'Erro interno do servidor.' });
    }
};

export default listSkill;