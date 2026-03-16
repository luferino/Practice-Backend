import {StudentRepository} from '../../domain/student.repository.js';
import {pool} from '../../../../database/connection.postgres.js';
import {Student} from '../../domain/student.entity.js';

export class StudentPgRepository extends StudentRepository {
    async create({id, name, email}){
        const result = await pool.query('INSERT INTO students (name, email) VALUES ($1, $2) RETURNING *', [name, email]);
        return new Student(result.rows[0]);
    }

    async findById(id){
        const result = await pool.query('SELECT * FROM students WHERE id = $1', [id]);
        return new Student(result.rows[0]);
    }

    async findAll(){
        const result = await pool.query('SELECT * FROM students');
        return result.rows.map(row => new Student(row));    
    }
}