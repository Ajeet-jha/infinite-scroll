import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function Image({ alt, src }) {
	return (
		<div>
			<LazyLoadImage
				alt={alt}
				src={src}
				effect="blur"
				width={600}
				placeholderSrc="/logo512.png"
			/>
			{/* <span>{alt}</span> */}
		</div>
	);
}

export default Image;
