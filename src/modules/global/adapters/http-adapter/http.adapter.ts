import axios, { AxiosError, AxiosInstance, ResponseType } from "axios";
import { HttpClientOptions } from "./http.interface";

const axiosInstances: { [key: string]: AxiosInstance; } = {};

const getAxiosInstance = (baseURL: string, expectedType?: "File" | "Blob") => {
	let accept =
		"application/json, text/plain, application/x-www-form-urlencoded ,*/*";
	let responseType: ResponseType = "json";

	if (expectedType === "File" || expectedType === "Blob") {
		accept = "application/octet-stream";
		responseType = "blob";
	}

	if (!axiosInstances[baseURL]) {
		const instance = axios.create({
			baseURL,
			timeout: 1000000,
			headers: {
				"Content-Type": "application/json",
				Accept: accept,
			},
			responseType,
		});


		axiosInstances[baseURL] = instance;
	}
	return axiosInstances[baseURL];
};

const defaultInstance = getAxiosInstance(process.env.NEXT_PUBLIC_URL_BASE);

export class ExceptionHttpError extends Error {
	type!: string;
	status!: number;
	constructor(message: string, type: string, status: number) {
		super(message);
		this.type = type;
		this.status = status;
		this.stack = "ExceptionHttpError";
	}
}

export const httpClient = async <T>(
	endpoint: string,
	options: HttpClientOptions
): Promise<T> => {
	const { method = "get", body, config, baseURL, expectedType } = options;
	try {
		const instance = baseURL
			? getAxiosInstance(baseURL, expectedType)
			: defaultInstance;

		const response = (await instance.request({
			url: endpoint,
			method,
			data: body,
			...config,
		})) as { data: T; };

		return response.data;
	} catch (error) {
		if ((error as Error)?.message === "Failed to fetch") {
			throw error;
		}

		if (error instanceof AxiosError && error.response) {
			const errorResponse = error.response.data;
			let errorMessage = "Error desconocido del servidor";

			if (!errorResponse?.message) {
				errorMessage = errorResponse.mensaje;

				if (errorResponse?.errors) {
					const keys = Object.keys(errorResponse.errors);

					errorMessage = errorResponse.errors[keys[0]][0];
				}
			} else {
				errorMessage = errorResponse.message.toLowerCase();
			}

			const structuredError = {
				message: errorMessage,
				type: error.name,
				status: error.response.status,
				// Puedes agregar más propiedades si es necesario
			};
			throw structuredError;
		}

		throw error;
	}
};

export default httpClient;
