import { _Define, __ } from "@BaseTypes/lib/SchemaBuilderAle";
import { DataTypes, Sequelize } from "sequelize";
import * as Yup from "yup";

export class BaseModel {
	id?: string = __(
		new _Define()
			.setYup(Yup.string().required().uuid())
	);
	createdBy?: string = __(
		new _Define()
			.setYup(Yup.string().uuid())

	);
	isDeleted?: boolean = __(
		new _Define()
			.setYup(Yup.boolean())
	);
	updatedBy?: string = __(
		new _Define()
			.setYup(Yup.string().uuid())
	);
	createdAt?: Date = __(
		new _Define()
			.setYup(Yup.date())
	);
	updatedAt?: Date = __(
		new _Define()
			.setYup(Yup.date())
	);
}
