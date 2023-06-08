export type IClients = {
	name: string;
	CPF: string;
	uuid: string;
	address: string;
	phoneNumber: string;
}

export type IOrionAPI = {
	companyName: string;
	dailyGainsOrLosses: number;
	dailyAverage: number;
	annualGainsOrLosses: number;
	clients: IClients[];
	events: [];
	tasks: [];
	finances?: IFinances[];
}

export type IFinances = {
    year: string;
    month: string;
    amount: number;
    fileURL: string;
}
