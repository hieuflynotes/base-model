import * as Yup from "yup";
import Lazy from "yup/lib/Lazy";
import { Assign, TypeOfShape } from "yup/lib/object";
import Reference from "yup/lib/Reference";
import { Optionals } from "yup/lib/types";


Yup.object().shape({});
export class _Define<T = any> {
	yup?: Yup.AnySchema<any, any, any> | Reference<unknown> | Lazy<any, any>;
	value?: T;
	setYup(
		item: Yup.AnySchema<any, any, any> | Reference<unknown> | Lazy<any, any>
	): this {
		this.yup = item;
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

	public static intValue<T extends object>(C: Constructor<T>) {
		let c = new C();
		Object.entries(c).map((entity: any) => {
			c[entity[0]] = entity[1]?.value;
		});
		return c;
    }
    
}
