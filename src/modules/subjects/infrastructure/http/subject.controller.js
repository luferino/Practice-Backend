export class SubjectController {
    constructor(createSubjectUseCase, listSubjectUseCase) {
        this.createSubjectUseCase = createSubjectUseCase;
        this.listSubjectUseCase = listSubjectUseCase;
    } 
    create = async (req, res) => {
        try {
            const subject = req.body; 
            const createdSubject = await this.createSubjectUseCase.execute(subject);
            res.status(201).json(createdSubject);
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        } 
    }
    list = async (req, res) => {
        try {
            const subjects = await this.listSubjectUseCase.execute();
            res.status(200).json(subjects);
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }   
    }
}