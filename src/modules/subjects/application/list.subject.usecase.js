export class ListSubjectUseCase {
    constructor(subjectRepository) {
        this.subjectRepository = subjectRepository;
    } 
    async execute() {
        return await this.subjectRepository.findAll();
    }
} 