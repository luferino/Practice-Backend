import {StudentRepository} from '../../domine/repositories/student.repository.js';
import {pool} from '../database/connection.postgres.js';
import {Student} from '../../domine/entities/student.entity.js';

export class StudentPgRepository extends StudentRepository {
    create({id, name, email}){
        const result = pool.query('INSERT INTO students (id, name, email) VALUES ($1, $2, $3) RETURNING *', [id, name, email]);
        return new Student(result.rows[0]);
    }

    findById(id){
        const result = pool.query('SELECT * FROM students WHERE id = $1', [id]);
        return new Student(result.rows[0]);
    }
}