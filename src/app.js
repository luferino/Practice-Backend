import express from 'express';
import { studentRoutes } from './modules/student/infrastructure/http/student.routes.js';
import { subjectRoutes } from './modules/subjects/infrastructure/http/subject.routes.js';

export function createApp() {
const app = express();

app.use(express.json());


app.use('/students', studentRoutes());
app.use('/subjects', subjectRoutes());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

return app;
}