
abstract class abstractService<T> {

    protected tableName: string

    constructor(tableName: string) {
        this.tableName = tableName
    }
   

  // private tableName: string

  // constructor(tableName: string) {
  //   this.tableName = tableName
  // }

  // async findAll(): Promise<JSON> {
  //   try {
  //     const query = `SELECT json_agg(row_to_json(data)) as dados FROM ( SELECT * FROM ${this.tableName} ) data;`
  //     const result = await db.manyOrNone(query)

  //     return result
  //   } catch (error) {
  //     throw error
  //   }
  // }

  // async findById(id: string): Promise<any | null> {
  //   try {
  //     const query = `SELECT json_agg(row_to_json(data)) as dados FROM ( SELECT * FROM ${this.tableName} WHERE id = $1 ) data;`
  //     const result = await db.oneOrNone(query, [id])
  //     return result
  //   } catch (error) {
  //     throw error
  //   }
  // }

  // async save(data: Partial<T>): Promise<T> {
  //   try {
  //     const columns = Object.keys(data).join(', ')
  //     const values = Object.values(data)
  //     const placeholders = values.map((_, index) => `$${index + 1}`).join(', ')

  //     const query = `INSERT INTO ${this.tableName} (${columns}) VALUES (${placeholders}) RETURNING *;`
  //     const result = await db.one(query, values)
  //     return result
  //   } catch (error) {
  //     throw error
  //   }
  // }

  // async update(id: number, data: Partial<T>): Promise<T | null> {
  //   try {
  //     const columns = Object.keys(data).map((col, index) => `${col} = $${index + 2}`).join(', ')
  //     const values = Object.values(data)
  //     values.push(id)

  //     const query = `UPDATE ${this.tableName} SET ${columns} WHERE id = $1 RETURNING *;`
  //     const result = await db.oneOrNone(query, values)
  //     return result
  //   } catch (error) {
  //     throw error
  //   }
  // }

  // async delete(id: number): Promise<void> {
  //   try {
  //     const query = `DELETE FROM ${this.tableName} WHERE id = $1 RETURNING *;`
  //     await db.none(query, [id])
  //   } catch (error) {
  //     throw error
  //   }
  // }
}

export default abstractService;
