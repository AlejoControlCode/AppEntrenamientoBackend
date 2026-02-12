const Atletas = require('../shared/models/Atletas');

const AgregarAtleta = async (req, res) => {
  try {
    const {
      ID_Atleta,
      Nombre,
      Fecha_Nacimiento,
      Sexo,
      Tipo_Documento,
      Email,
      Telefono,
      Especialidad,
      Prueba,
      Categoria,
      Nivel
    } = req.body;

    const nuevoAtleta = await Atletas.create({
      ID_Atleta,
      Nombre,
      Fecha_Nacimiento,
      Sexo,
      Tipo_Documento,
      Email,
      Telefono,
      Especialidad,
      Prueba,
      Categoria,
      Nivel
    });

    res.status(201).json({
        message: 'El deportista se agrego de manera correcta',
        timestamp: new Date(),
        data: nuevoAtleta
    });

  } catch (error) {
    console.error('Error al agregar atleta:', error);
    res.status(500).json({ error: 'Error al agregar atleta' });
  }
};



const EditarAtletas = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      ID_Atleta,
      Nombre,
      Fecha_Nacimiento,
      Sexo,
      Tipo_Documento,
      Email,
      Telefono,
      Especialidad,
      Prueba,
      Categoria,
      Nivel
    } = req.body;

    const atletaExistente = await Atletas.findByPk(id);

    if (!atletaExistente) {
      return res.status(404).json({ error: 'Atleta no encontrado' });
    }

    await atletaExistente.update({
      ID_Atleta,
      Nombre,
      Fecha_Nacimiento,
      Sexo,
      Tipo_Documento,
      Email,
      Telefono,
      Especialidad,
      Prueba,
      Categoria,
      Nivel
    });

    res.status(200).json({
      message: 'El atleta se edito de manera correcta',
      timestamp: new Date(),
      data: atletaExistente
    });


  }catch(error){
    console.error('Error al editar atleta:', error);
  }


}
module.exports = { 
   AgregarAtleta,
   EditarAtletas };
