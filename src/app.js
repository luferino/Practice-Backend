import express from 'express';
import { studentRoutes } from './modules/student/infrastructure/http/student.routes.js';
import { subjectRoutes } from './modules/subjects/infrastructure/http/subject.routes.js';

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());


app.use('/students', studentRoutes());
app.use('/subjects', subjectRoutes());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});