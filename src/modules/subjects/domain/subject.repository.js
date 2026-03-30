export class SubjectRepository {
  constructor() {
    this.subjects = [];
  }

  async create(subject) {
    this.subjects.push(subject);
    return subject;
  }

  async findById(id) {
    return this.subjects.find((subject) => subject.id === id);
  }

  async findAll() {
    return this.subjects;
  }

  async update(id, updatedSubject) {
    const index = this.subjects.findIndex((subject) => subject.id === id);
    if (index !== -1) {
      this.subjects[index] = { ...this.subjects[index], ...updatedSubject };
      return this.subjects[index];
    }
    return null;
  }

  async delete(id) {
    const index = this.subjects.findIndex((subject) => subject.id === id);
    if (index !== -1) {
      this.subjects.splice(index, 1);
      return true;
    }
    return false;
  }
}