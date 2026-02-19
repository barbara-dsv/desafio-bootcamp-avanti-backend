import express from "express";

import createSkill from "./controllers/skill/createSkill.js";


const routes = express();

routes.post("/skill/:pessoa_id", createSkill);

export default routes;