import { DEEPL_ROUTE, MAIN_PAGE_ROUTE, NOT_FOUND_ROUTE, PALETTE_ROUTE, PERCEPTRON_ROUTE, YANDEX_GPT_ROUTE } from "./constants/constants";
import DeeplArticle from "./pages/Articles/Deepl/DeeplArticle";
import PaletteArticle from "./pages/Articles/Palette/PaletteArticle";
import Perceptron from "./pages/Articles/Perceptron/Perceptron";
import YandexGPT from "./pages/Articles/YandexGPT/YandexGPT";
import MainPage from "./pages/MainPage/MainPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

export const routes = [
    {
        path: MAIN_PAGE_ROUTE,
        component: <MainPage />
    },
    {
        path: NOT_FOUND_ROUTE,
        component: <NotFoundPage />
    },
    {
        path: DEEPL_ROUTE,
        component: <DeeplArticle />
    },
    {
        path: PALETTE_ROUTE,
        component: <PaletteArticle />
    },
    {
        path: YANDEX_GPT_ROUTE,
        component: <YandexGPT />
    },
    {
        path: PERCEPTRON_ROUTE,
        component: <Perceptron />
    }
]