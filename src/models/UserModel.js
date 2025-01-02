import { DataTypes } from "sequelize";
import db from "../database/database";
import { now } from "sequelize/lib/utils";

const User = db.define("User", {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: "active",
  },
  role: {
    type: DataTypes.ENUM,
    defaultValue: "admin" || "user",
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: now(),
  },
});

export default User;
