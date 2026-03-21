
export const buildStudentQuery = ({filter = {}, like =  false}) => {
    const keys = Object.keys(filter);

    const values = [];

    const allowedFields = ['id', 'name', 'email'];
    
}