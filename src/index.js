import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { LayoutMainPage } from './components/layout-main-page/layout-main-page'
import { MainPage } from './pages/main-page/main-page'
import { MoviesPage } from './pages/movies-page/movies-page'
import { SingleMoviePage } from './pages/single-movie-page/single-movie-page'
import { PageNotFound } from './pages/404/404'

import { PAGE_TYPES } from './constants/pageTypes'

import './index.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route element={<LayoutMainPage />}>
                <Route path='/' element={<MainPage />} />
                <Route path={`/${PAGE_TYPES.trending}/:page`} element={<MoviesPage type={PAGE_TYPES.trending} />} />
                <Route path={`/${PAGE_TYPES.popular}/:page`} element={<MoviesPage type={PAGE_TYPES.popular} />} />
                <Route path={`/${PAGE_TYPES.rated}/:page`} element={<MoviesPage type={PAGE_TYPES.rated} />} />
                <Route path={'/:category/:page/:id'} element={<SingleMoviePage />} />
                <Route path="*" element={<PageNotFound />} />
            </Route>
        </Routes>
    </BrowserRouter>
);