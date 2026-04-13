export class EditStudentUseCase {  
    constructor(studentRepository) {
        this.studentRepository = studentRepository;
    }   
    async execute(id, studentData) {   
        return await this.studentRepository.edit(id, studentData);
    }

}