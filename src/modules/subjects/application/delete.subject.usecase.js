export class DeleteSubjectUseCase {
    constructor(subjectRepository) {
        this.subjectRepository = subjectRepository;
    }
    async execute(id) {
        return await this.subjectRepository.delete(id);
    }   
}