import {StudentRepository} from '../../domain/student.repository.js';
import {pool} from '../../../../database/connection.postgres.js';
import { StudentAdapter } from '../../adapters/student.adapter.js';

export class StudentPgRepository extends StudentRepository {
    async create({name, email}){
        const result = await pool.query('INSERT INTO students (name, email) VALUES ($1, $2) RETURNING *', [name, email]);
        return StudentAdapter.toEntity(result.rows[0]);
    }

    async findById(id){
        const result = await pool.query('SELECT * FROM students WHERE id = $1', [id]);
        return StudentAdapter.toEntity(result.rows[0]);
    }

    async findAll(){
        const result = await pool.query('SELECT * FROM students');
        //console.log(result.rows);
        return result.rows.map(row => StudentAdapter.toEntity(row));    
    }
}