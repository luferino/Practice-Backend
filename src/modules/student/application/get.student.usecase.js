export class GetStudentUseCase {
    constructor(studentRepository) {
        this.studentRepository = studentRepository;
    }

    async execute({filters, like, mode}) {
        if (!filters || Object.keys(filters).length === 0) {
            throw new Error('At least one filter must be provided');
        }
        return this.studentRepository.getBySearch({filter: filters, like, mode});
    }
}