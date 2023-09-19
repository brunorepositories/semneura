abstract class abstractModel<T> {

  private id: number
  private dt_create: string
  private dt_update: string

  constructor() {
    this.id = 0
    this.dt_create = ""
    this.dt_update = ""
  }

   get getId(): number {
    return this.id;
  }

  set setId(id: number) {
    this.id = id;
  }

  get getDt_create(): string {
    return this.dt_create;
  }

  set setDt_create(dt_create: string) {
    this.dt_create = dt_create;
  }

  get getDt_update(): string {
    return this.dt_update;
  }

  set setDt_update(dt_update: string) {
    this.dt_update = dt_update;
  }
}

export default abstractModel
