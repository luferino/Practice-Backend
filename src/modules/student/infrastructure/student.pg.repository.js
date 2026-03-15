import {StudentRepository} from '../domine/student.repository.js';
import {pool} from '../../../database/connection.postgres.js';
import {Student} from '../domine/student.entity.js';

export class StudentPgRepository extends StudentRepository {
    create({id, name, email}){
        const result = pool.query('INSERT INTO students (name, email) VALUES ($1, $2) RETURNING *', [name, email]);
        return new Student(result.rows[0]);
    }

    findById(id){
        const result = pool.query('SELECT * FROM students WHERE id = $1', [id]);
        return new Student(result.rows[0]);
    }

    findAll(){
        const result = pool.query('SELECT * FROM students');
        return result.rows.map(row => new Student(row));    
    }
}