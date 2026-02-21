import prisma from '../../PrismaCliente.js';

const editPerson = async (req, res) => {

    const { id } = req.params;
    const { nome, email, telefone, descricao,senha } = req.body;
    const loggedPersonId = req.loggedPersonId;

    try {

        const person = await prisma.pessoa.findUnique({
            where: { id: Number(id) }
        });

        if (!person) {
            return res.status(404).json({ mensagem: 'Pessoa não encontrada.' });
        }

          if (person.id !== loggedPersonId){
            return res.status(403).json({mensagem:'Você não têm permisão para editar'})
        }

        const updatedPerson = await prisma.pessoa.update({
            where: { id: Number(id) },
            data: {
                nome,
                email,
                telefone,
                descricao,
                senha
            }
        });

        return res.status(200).json(updatedPerson);

    } catch (error) {
        console.log(error);
        return res.status(500).json({ mensagem: 'Erro interno do servidor.' });
    }

};

export default editPerson;
