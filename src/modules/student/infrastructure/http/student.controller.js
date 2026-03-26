export class StudentController {
    constructor(createStudentUseCase, listStudentUseCase, getStudentUseCase) {
        this.createStudentUseCase = createStudentUseCase;
        this.listStudentUseCase = listStudentUseCase;
        this.getStudentUseCase = getStudentUseCase;
    }

    create = async (req, res) => {
        //console.log('BODY:', req.body);
        try {
            const student = req.body;
            const createdStudent = await this.createStudentUseCase.execute(student);
            res.status(201).json(createdStudent);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    list = async (req, res) => { 
        try {
            const students = await this.listStudentUseCase.execute();
            res.status(200).json(students);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    getBySearch = async (req, res) => {
        try {
            const {like, mode, ...filter} = req.query;
            const students = await this.getStudentUseCase.searchStudents(
                {
                    filter,
                    like: like === 'true',
                    mode: mode || 'AND'
                }
            );
            res.status(200).json(students);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }    
}