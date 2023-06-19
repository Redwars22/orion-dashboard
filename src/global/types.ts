export type IClients = {
	name: string;
	CPF: string;
	uuid: string;
	address: string;
	phoneNumber: string;
}

export interface IEvent {
	title: string;
	date: string;
	description: string;
	uuid: string;
}

export type IOrionAPI = {
	companyName: string;
	dailyGainsOrLosses: number;
	dailyAverage: number;
	annualGainsOrLosses: number;
	clients: IClients[];
	events: IEvent[];
	tasks: [];
	finances?: IFinances[];
	projects?: IProjects[] | [];
}

export type IFinances = {
    year: string;
    month: string;
    amount: number;
    fileURL: string;
}

export type IProjects = {
	title: string;
	owner: string;
	description: string;
	status: "todo" | "doing" | "done";
	date: string;
}

export interface IAthenaData {
	labels: string[];
	data: number[]| string[];
}

export interface IAthenaComment {}

export interface IAthenaAPI {
	gender: IAthenaData;
	age: IAthenaData;
	region: IAthenaData;
	platform: IAthenaData;
	ratings: IAthenaData;
	comments: any[];
}
