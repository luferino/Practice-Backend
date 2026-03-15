export class ListStudentUseCase {
    constructor(studentRepository){
        this.studentRepository = studentRepository;
    }

    async execute(){
        return await this.studentRepository.findAll ();
    }
}