export class StudentRepository {
    async create(student){
        throw new Error('Method not implemented');
    }

    async findById(id){
        throw new Error('Method not implemented');
    }

    async findAll(){
        throw new Error('Method not implemented');
    }

    async getBySearch({filter, like, mode}){
        console.log('Received filters in repository:', filter, 'like:', like, 'mode:', mode);
        throw new Error('Method not implemented');
    }
}