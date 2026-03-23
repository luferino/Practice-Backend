
export const buildStudentQuery = ({filter = {}, like =  false}) => {
    const keys = Object.keys(filter);

    const values = [];

    const allowedFields = ['id', 'name', 'email'];
/*const safeFilters = Object.fromEntries(
    Object.entries(filters).filter(([key]) =>
        allowedFields.includes(key)
    )
);*/
    const safeKeys = keys.filter(key => allowedFields.includes(key));
    
    const conditions = safeKeys.map((key,i) => {
        values.push(like ? `%${filter[key]}%` : filter[key]);
        return `${key} ${like ? 'ILIKE' : '='} $${i + 1}`;
    });
    
    return {
        clause: conditions.join(' AND '),
        values
    };
}