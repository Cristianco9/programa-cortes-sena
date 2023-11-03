import { Router } from "express";
import {
  loginView,
  validateLogin,
  createCustomers,
  deleteCustomer,
  editCustomer,
  renderCustomers,
  updateCustomer,
} from "../controllers/customerController.js";
const router = Router();

router.get("/", loginView);
router.post("/send", validateLogin);
router.get("/anjeos", renderCustomers);
router.post("/anjeos/add", createCustomers);
router.get("/anjeos/update/:id", editCustomer);
router.post("/anjeos/update/:id", updateCustomer);
router.get("/anjeos/delete/:id", deleteCustomer);

export default router;
