import { _Define, __ } from "@BaseTypes/lib/SchemaBuilderAle";
import { DataTypes, Sequelize } from "sequelize";
import * as Yup from "yup";

export class BaseModel {
	id?: string = __(
		new _Define()
			.setSequelize({primaryKey: true,type: DataTypes.UUID,})
			.setYup(Yup.string().required().uuid())
	);
	createdBy?: string = __(
		new _Define()
			.setSequelize({type: DataTypes.UUID,field: "created_by",})
			.setYup(Yup.string().uuid())
	);
	isDeleted?: boolean = __(
		new _Define()
			.setSequelize({type: DataTypes.BOOLEAN,field: "is_deleted",defaultValue: false,})
			.setYup(Yup.boolean())
	);
	updatedBy?: string = __(
		new _Define()
			.setSequelize({type: DataTypes.UUID,field: "updated_by",})
			.setYup(Yup.string().uuid())
	);
	createdAt?: Date = __(
		new _Define()
			.setSequelize({type: DataTypes.DATE,field: "created_at",defaultValue: Sequelize.literal("NOW()")})
			.setYup(Yup.date())
	);
	updatedAt?: Date = __(
		new _Define()
			.setSequelize({type: DataTypes.DATE,field: "updated_at",defaultValue: Sequelize.literal("NOW()"),})
			.setYup(Yup.date())
	);
}
