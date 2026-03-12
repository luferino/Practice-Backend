import {StudentRepository} from '../../domine/repositories/student.repository.js';
import {pool} from '../database/connection.postgres.js';

export class StudentPgRepository extends StudentRepository {
    create({id, name, email}){
        const result = pool.query('INSERT INTO students (id, name, email) VALUES ($1, $2, $3) RETURNING *', [id, name, email]);
        return result.rows[0];
    }
}