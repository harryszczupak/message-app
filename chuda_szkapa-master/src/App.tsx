import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './pages/RootLayout';
import { lazy } from 'react';
import { Suspense } from 'react';
import LoadingScreen from './UI/LoadingScreen';
import {loader as menuLoader} from './pages/MenuPage'
const HomePage = lazy(() => import('./pages/HomePage'));
const MenuPage = lazy(() => import('./pages/MenuPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		errorElement: '',
		children: [
			{
				index: true,
				element: (
					<Suspense fallback={<LoadingScreen />}>
						<HomePage />
					</Suspense>
				),
			},
			{
				path: 'menu',
				element: (
					<Suspense fallback={<LoadingScreen />}>
						<MenuPage />
					</Suspense>
				),
				loader:menuLoader
			},
			{
				path: 'about',
				element: (
					<Suspense fallback={<LoadingScreen />}>
						<AboutPage />
					</Suspense>
				),
			},
		],
	},
]);
function App() {
	return <RouterProvider router={router} />;
}

export default App;
