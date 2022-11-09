import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { lazy } from '@loadable/component';
import './index.css';
import reportWebVitals from './reportWebVitals';

const App = lazy(() => import(/* webpackChunkName: "App" */ './App'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Suspense fallback={<div>Loading...</div>}>
			<App />
		</Suspense>
	</React.StrictMode>
);

reportWebVitals();
