export class DeleteStudentUseCase {
    constructor(studentRepository) {
        this.studentRepository = studentRepository;
    }
    async execute(id) {
        return await this.studentRepository.delete(id);
    }
}