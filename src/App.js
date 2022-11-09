import { useEffect, useState, useCallback, Suspense } from 'react';
import { lazy } from '@loadable/component';
import { throttle } from 'lodash';
import { getImages } from './services';

const Image = lazy(() =>
	import(/* webpackChunkName: "Image" */ './components/Image')
);

function App() {
	const [count, setCount] = useState(10);
	const [images, setImages] = useState([]);

	const fetchImages = useCallback(async () => {
		const resp = await getImages(count);
		setImages(resp);
	}, [count]);

	useEffect(() => {
		fetchImages();
	}, [count]);

	const scrollEvent = () => {
		if (
			window.innerHeight + window.scrollY >=
			document.body.offsetHeight - 300
		) {
			setCount((pre) => pre + 10);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', throttle(scrollEvent, 1000));
		return () => window.removeEventListener('scroll', scrollEvent);
	}, []);

	return (
		<div className="App">
			{images.map(({ id, url, author }) => (
				<Suspense key={id} fallback={<div>Loading...</div>}>
					<Image src={url} alt={author} />
				</Suspense>
			))}
		</div>
	);
}

export default App;
