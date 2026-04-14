import { Router } from "express";
import { SubjectController } from "./subject.controller.js";
import { CreateSubjectUseCase } from "../../application/create.subject.usecase.js";
import { ListSubjectUseCase } from "../../application/list.subject.usecase.js";
import { SubjectPgRepository } from "../persistence/subject.pg.repository.js";

const router = Router();

const subjectPgRepository = new SubjectPgRepository();
const createSubjectUseCase = new CreateSubjectUseCase(subjectPgRepository);
const listSubjectUseCase = new ListSubjectUseCase(subjectPgRepository);
const subjectController = new SubjectController(createSubjectUseCase, listSubjectUseCase);  

export const subjectRoutes = () => {

router.post("/", subjectController.create);
router.get("/", subjectController.list);

return router;

}