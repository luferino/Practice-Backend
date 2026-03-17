import { Router } from "express";
import { StudentController } from "./student.controller.js";
import { CreateStudentUseCase } from "../../application/create.student.usecase.js";
import { ListStudentUseCase } from "../../application/list.student.usecase.js";
import { StudentPgRepository } from "../persistence/student.pg.repository.js";

const router = Router();

const studentPgRepository = new StudentPgRepository();
const createStudentUseCase = new CreateStudentUseCase(studentPgRepository);
const listStudentUseCase = new ListStudentUseCase(studentPgRepository);
const studentController = new StudentController(createStudentUseCase, listStudentUseCase);

export const studentRoutes = () => {

router.post("/", studentController.create);
router.get("/", studentController.list);

return router;
};

