import {SubjectRepository} from '../../domain/subject.repository.js';
import {pool} from '../../../../database/connection.postgres.js';

export class SubjectPgRepository extends SubjectRepository {
    async create({name, code}){
        const result = await pool.query('INSERT INTO subjects (name, code) VALUES ($1, $2) RETURNING *', [name, code]);
        return result.rows[0];
    }   
    async findAll(){
        const result = await pool.query('SELECT * FROM subjects');
        return result.rows;    
    }

}