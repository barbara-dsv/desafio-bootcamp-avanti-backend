import prisma from '../../database/PrismaCliente.js';

const filterSkillTitleOrDescription = async (req, res) => {
    const { titulo, descricao } = req.query;
    try {

        const skills = await prisma.conhecimento.findMany({
            where: {
                titulo: titulo ? {
                    contains: titulo,
                    mode: 'insensitive'
                } : undefined,
                descricao: descricao ? {
                    contains: descricao,
                    mode: 'insensitive'
                } : undefined
            }
        })

        if (skills.length === 0) {
            return res.status(404).json({ mensagem: "Nenhuma habilidade encontrada com o título ou descrição fornecidos." });
        }

        return res.status(200).json(skills);

    } catch (error) {
        console.log(error);
        return res.status(500).json({ mensagem: 'Erro interno do servidor.' });
    }
};

export default filterSkillTitleOrDescription;