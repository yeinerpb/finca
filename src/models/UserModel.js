import { DataTypes } from "sequelize";
import db from "../database/database";

const User = db.define("User", {
  name: {},
});

export default User;
