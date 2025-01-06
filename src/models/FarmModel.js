import { Model, DataTypes, BelongsTo } from "sequelize";
import db from "../database/database";
import User from "./UserModel";

class Farm extends Model {}

Farm.init(
  {
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
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    size: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: "id",
      },
    },
  },
  {
    sequelize: db,
    modelName: "Farm",
    timestamps: false,
  }
);

User.hasMany(Farm, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Farm.belongsTo(User, {
  foreignKey: "user_id",
});

export default Farm;
