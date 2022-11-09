import axios from 'axios';

const { REACT_APP_API } = process.env;

const Api = axios.create({
	baseUrl: REACT_APP_API,
});

const requestHnadler = (request) => request;

const responseHandler = (response) => response;

const errorHandler = (error) => Promise.reject(error);

Api.interceptors.request.use(
	(request) => requestHnadler(request),
	(error) => errorHandler(error)
);

Api.interceptors.response.use(
	(request) => responseHandler(request),
	(error) => errorHandler(error)
);

// eslint-disable-next-line import/prefer-default-export
export { Api };
