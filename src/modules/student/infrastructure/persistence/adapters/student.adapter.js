import { Student } from '../../../domain/student.entity.js';

export class StudentAdapter {
    static toEntity(studentData) {
        /*console.log('ROW FROM DB:', studentData);
        console.log('VALUES:', {
  id: studentData.id,
  name: studentData.name,
  email: studentData.email
});*/
        return new Student(studentData.id, studentData.name, studentData.email);
    }
}