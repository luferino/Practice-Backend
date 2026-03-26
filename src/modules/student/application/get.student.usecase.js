export class GetStudentUseCase {
    constructor(studentRepository) {
        this.studentRepository = studentRepository;
    }

    async searchStudents({filter, like, mode}) {
      
        if (!filter || Object.keys(filter).length === 0) {
            throw new Error('At least one filter must be provided');
        }
        return this.studentRepository.getBySearch({filter, like, mode});
    }
}   