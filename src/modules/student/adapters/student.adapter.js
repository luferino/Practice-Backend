import { Student } from '../domain/student.entity.js';

export class StudentAdapter {
    static toEntity(studentData) {
        return new Student(studentData.id, studentData.name, studentData.email);
    }
}