import prisma from "../../PrismaCliente.js";

const filterSkillCategoryOrLeve = async (req, res) => {
    const { categoria, nivel } = req.query;
    const niveisPermitidos = ['Iniciante', 'Intermediario', 'Avancado'];
    try {

        if (nivel && !niveisPermitidos.includes(nivel)) {
            return res.status(400).json({
                mensagem: "Nível inválido. Você deve procurar por: Iniciante, Intermediario ou Avancado."
            });
        };

        const skills = await prisma.conhecimento.findMany({
            where: {
                categoria: categoria ? {
                    contains: categoria,
                    mode: 'insensitive'
                } : undefined,
                nivel: nivel ?? undefined
            }
        });

        if (skills.length === 0) {
            return res.status(404).json({ mensagem: "Categoria não encontrada." })
        };

        return res.status(200).json(skills);

    } catch (error) {
        console.log(error);
        return res.status(500).json({ mensagem: 'Erro interno do servidor.' });
    }
};

export default filterSkillCategoryOrLeve;