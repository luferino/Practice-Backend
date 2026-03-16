export class CreateStudentUseCase {
    constructor(studentRepository){
        this.studentRepository = studentRepository;
    }

    async execute(data){
        const student = {
            name: data.name,
            email: data.email
        }
        return await this.studentRepository.create(student);
    }
}