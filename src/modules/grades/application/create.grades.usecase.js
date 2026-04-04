export class CreateGradesUseCase {
    constructor(gradesRepository){
        this.gradesRepository = gradesRepository;
    }
    async execute(data){
        const grades = {
            studentId: data.studentId,
            subjectId: data.subjectId,
            grade: data.grade
        };
        return await this.gradesRepository.create(grades);
    }   
}