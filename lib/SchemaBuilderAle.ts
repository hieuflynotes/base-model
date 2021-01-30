import { DataTypeAbstract, ModelAttributeColumnOptions, Sequelize } from "sequelize/types";
import * as Yup from "yup";
import Lazy from "yup/lib/Lazy";
import { Assign, TypeOfShape } from "yup/lib/object";
import Reference from "yup/lib/Reference";
import { Optionals } from "yup/lib/types";

type SequelizeAttribute =
	| string
	| DataTypeAbstract
	| ModelAttributeColumnOptions;

type SequelizeAttributes<T extends { [key: string]: any }> = {
	[P in keyof T]: SequelizeAttribute;
};

Yup.object().shape({});
export class _Define<T = any> {
	yup?: Yup.AnySchema<any, any, any> | Reference<unknown> | Lazy<any, any>;
	sequelize?: SequelizeAttribute;
	value?: T;
	setYup(
		item: Yup.AnySchema<any, any, any> | Reference<unknown> | Lazy<any, any>
	): this {
		this.yup = item;
		return this;
	}

	setSequelize(item: SequelizeAttribute): this {
		this.sequelize = item;
		return this;
	}

	setValue(value: T): this {
		this.value = value;
		return this;
	}
}

export function __(builder: _Define): any {
	return builder;
}
export type Constructor<T = object> = new (...args: any[]) => T;
export class Builder {
	public static getYup<T extends object>(
		C: Constructor<T>
	): Yup.ObjectSchema<
		Assign<any, any>,
		any,
		TypeOfShape<Assign<any, any>> | Optionals<any>
	> {
		let c = new C();
		Object.entries(c).map((entity: any) => {
			c[entity[0]] = entity[1]?.yup;
		});
		return c as any;
    }
    
	public static getSequelize<T extends object>(
		C: Constructor<T>
	): SequelizeAttributes<T> {
		let c = new C();
		Object.entries(c).map((entity: any) => {
			c[entity[0]] = entity[1]?.sequelize;
		});
		return c as any;
	}

	public static intValue<T extends object>(C: Constructor<T>) {
		let c = new C();
		Object.entries(c).map((entity: any) => {
			c[entity[0]] = entity[1]?.value;
		});
		return c;
    }
    
    public static defineSequelize<T extends object>(C: Constructor<T>, sequelize:Sequelize) {
		return sequelize.define("", this.getSequelize(C)); 
		
	}
}
