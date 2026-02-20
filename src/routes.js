import express from "express";

import createSkill from "./controllers/skill/createSkill.js";
import updateSkill from "./controllers/skill/updateSkill.js";
import deleteSkill from "./controllers/skill/deleteSkill.js";
import updateSkillPerson from "./controllers/skill/updateSkillPerson.js";
import listSkill from "./controllers/skill/listSkill.js";
import detailsSkill from "./controllers/skill/detailsSkill.js";
import filterSkillCategoryOrLeve from "./controllers/skill/filterSkillCategoryOrLevel.js";


const routes = express();

routes.post("/skill/:pessoa_id", createSkill);
routes.put("/skill/:id", updateSkill);
routes.delete("/skill/:id", deleteSkill);
routes.put("/skill/:id/person/:pessoa_id", updateSkillPerson);
routes.get("/skill", listSkill);
routes.get("/skill/details/:id", detailsSkill);
routes.get("/filterSkillCategoryOrLevel", filterSkillCategoryOrLeve);

export default routes;