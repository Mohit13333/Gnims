import { Router } from "express";
import { saveEmails } from "../controller/email.js";

const router = Router();

router.route("/subscribe").post(saveEmails);

export default router;
