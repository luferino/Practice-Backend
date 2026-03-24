export class GetStudentUseCase {
    constructor(studentRepository) {
        this.studentRepository = studentRepository;
    }

    async execute(params) {
        return this.studentRepository.getBySearch(params);
    }
}