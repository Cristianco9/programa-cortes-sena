import { resolveInclude } from "ejs";
import { pool } from "../db.js";

export const loginView = async (req, res) => {
  res.render("login");
};

export const viewProfesor = async (req, res) => {
  res.render("viewProfesor");
};

export const validateLogin = async(req, res) => {

  const data = req.body;

  
  if ( data.user == "admin" || data.password === "admin") {
    res.redirect("anjeos");
  } else if(data.user == "docente" || data.password === "1234") {
    res.redirect("viewProfesor")}
};

export const renderCustomers = async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM customer");
  res.render("anjeos", { customers: rows });
};


export const createCustomers = async (req, res) => {
  const newCustomer = req.body;
  await pool.query("INSERT INTO customer set ?", [newCustomer]);
  res.redirect("/anjeos");
};

export const editCustomer = async (req, res) => {
  const { id } = req.params;
  const [result] = await pool.query("SELECT * FROM customer WHERE id = ?", [
    id,
  ]);
  res.render("anjeos_edit", { customer: result[0] });
};

export const updateCustomer = async (req, res) => {
  const { id } = req.params;
  const newCustomer = req.body;
  await pool.query("UPDATE customer set ? WHERE id = ?", [newCustomer, id]);
  res.redirect("/anjeos");
};

export const deleteCustomer = async (req, res) => {
  const { id } = req.params;
  const result = await pool.query("DELETE FROM customer WHERE id = ?", [id]);
  if (result.affectedRows === 1) {
    res.json({ message: "Customer deleted" });
  }
  res.redirect("/anjeos");
};  