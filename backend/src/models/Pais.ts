import Model from './Model'; // 
import Pais from '../interfaces/paisInterface' 
import Estado from '../interfaces/estadoInterface' 
import Cidade from '../interfaces/cidadeInterface'


class PaisModel extends Model<Pais> {
  constructor() {
    super('pais'); // Nome da tabela no banco de dados para País
  }
}

class EstadoModel extends Model<Estado> {
  constructor() {
    super('estado'); // Nome da tabela no banco de dados para Estado
  }
}

class CidadeModel extends Model<Cidade> {
  constructor() {
    super('cidade'); // Nome da tabela no banco de dados para Cidade
  }
}