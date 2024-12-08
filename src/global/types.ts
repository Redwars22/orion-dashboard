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
	finances?: IFinances[];
	projects?: IProjects[] | [];
	comments: IAthenaComment[];
	settings: ISettings;
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
	data: number[] | string[];
}

export interface IAthenaComment {
	name: string;
	date: string;
	rating: number;
	comment: string;
	uuid: string;
}

export interface IAthenaAPI {
	gender: IAthenaData;
	age: IAthenaData;
	region: IAthenaData;
	platform: IAthenaData;
	ratings: IAthenaData;
	comments: IAthenaAPI[];
}

export interface ISettings {
	admin: string[];
	businessName: string;
	twoFactorAuth: boolean;
	CNPJ: string;
	productKey: string;
	expiryDate: string;
	readOnly: boolean;
}

export interface IPDFReport {}