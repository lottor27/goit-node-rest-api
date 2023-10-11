const express = require("express");

const { validateBody, authenticate } = require("../../middlewares");

const { schemas } = require("../../models/user");

const ctrl = require("../../controllers/auth");

const router = express.Router();

// signUp
router.post(
  "/users/register",
  validateBody(schemas.registerShema),
  ctrl.register
);
// signin
router.post("/users/login", validateBody(schemas.loginShema), ctrl.login);

router.post("/users/logout", authenticate, ctrl.logout);

router.get("/users/current", authenticate, ctrl.getCurrent);

module.exports = router;
