import abstractModel from "./Model";
class PaisModel extends abstractModel<any> {
  private pais: string;
  private sigla: string;
  private ddi: string;

  constructor() {
    super();
    this.pais = "";
    this.sigla = "";
    this.ddi = "";
  }

  get getpais(): string {
    return this.pais;
  }

  set setpais(nome: string) {
    this.pais = nome;
  }

  get getSigla(): string {
    return this.sigla;
  }

  set setSigla(sigla: string) {
    this.sigla = sigla;
  }

  get getDdi(): string {
    return this.ddi;
  }

  set setDdi(ddi: string) {
    this.ddi = ddi;
  }
}

export default PaisModel;
