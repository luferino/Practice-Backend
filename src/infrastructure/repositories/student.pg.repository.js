import {StudentRepository} from '../../domine/repositories/student.repository.js';
import {pool} from '../database/connection.postgres.js';

export class StudentPgRepository extends StudentRepository {
    create({id, name, email}){
        
    }
}