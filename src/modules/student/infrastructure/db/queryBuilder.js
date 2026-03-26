const STUDENT_FIELDS  = ['id', 'name', 'email'];

export const buildStudentQuery = ({filter = {}, like =  false, mode = 'AND'}) => {
    const keys = Object.keys(filter);

    const values = [];

/*const safeFilters = Object.fromEntries(
    Object.entries(filters).filter(([key]) =>
        allowedFields.includes(key)
    )
);*/
    const entries = Object.entries(filter).filter(([key]) => STUDENT_FIELDS.includes(key));
    if(entries.length === 0) {
        throw new Error('No valid fields provided for filtering');
    }

    const conditions = entries.map(([key, value], i) => {
        values.push(like ? `%${value}%` : value);
        const operator = like ? 'ILIKE' : '=';

        return `${key} ${operator } $${i + 1}`;
    });
    
    return {
        clause: conditions.join(` ${mode} `),
        values
    };
}