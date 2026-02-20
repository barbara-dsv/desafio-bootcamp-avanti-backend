import express from "express";

import auth from './middlewares/auth.js'
import createSkill from "./controllers/skill/createSkill.js";
import updateSkill from "./controllers/skill/updateSkill.js";
import deleteSkill from "./controllers/skill/deleteSkill.js";
import updateSkillPerson from "./controllers/skill/updateSkillPerson.js";
import listSkill from "./controllers/skill/listSkill.js";
import detailsSkill from "./controllers/skill/detailsSkill.js";
import filterSkillCategoryOrLeve from "./controllers/skill/filterSkillCategoryOrLevel.js";
import createPerson from "./controllers/person/createPerson.js";
import login from "./controllers/person/login.js";
import listPerson from "./controllers/person/listPerson.js";


const routes = express();

routes.post("/person", createPerson);
routes.post("/login", login);
routes.get("/person", auth, listPerson)

routes.post("/skill", auth, createSkill);
routes.put("/skill/:id", auth, updateSkill);
routes.delete("/skill/:id", auth, deleteSkill);
routes.put("/skill/:id/person/:pessoa_id", updateSkillPerson);
routes.get("/skill", listSkill);
routes.get("/skill/details/:id", detailsSkill);
routes.get("/filterSkillCategoryOrLevel", filterSkillCategoryOrLeve);

export default routes;