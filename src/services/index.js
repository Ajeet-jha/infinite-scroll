import { Api } from '../Api';

const { REACT_APP_API } = process.env;

// eslint-disable-next-line import/prefer-default-export
export const getImages = async (count) => {
	const resp = await Api(`${REACT_APP_API}/list?limit=${count}`);
	const image = resp.data.map((data) => ({
		url: data.download_url,
		id: data.id,
		author: data.author,
	}));

	return image;
};
