export class CreateSubjectUseCase {
    constructor(subjectRepository) {
        this.subjectRepository = subjectRepository;
    }   
    
    async execute(data) {
        const subject = {
            name: data.name,
            code: data.code
        };
        return await this.subjectRepository.create(subject);
    }
}