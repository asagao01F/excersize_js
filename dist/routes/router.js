"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const myController_1 = require("../controllers/myController");
const router = (0, express_1.Router)();
router.get("/", myController_1.getExample);
exports.default = router;
