export class CreateStudentUseCase {
    constructor(studentRepository){
        this.studentRepository = studentRepository;
    }

    async execute(student){
        return await this.studentRepository.create(student);
    }
}