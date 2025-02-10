import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { ArticleStorage } from './storage/ArticleStorage';
import { createContext, useState } from 'react';
import { ArticleStorageType } from './types/ArticleStorageType';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import AppRouter from './components/AppRouter';

export const Context = createContext<ArticleStorageType | null>(null)

function App() {
  const [currentArticleStorage] = useState<ArticleStorageType>({
    articleStorage: new ArticleStorage()
  });

  return (
    <div className="App">
      <Context.Provider value={currentArticleStorage}>
        <BrowserRouter>
          <Header />
          <AppRouter />
          <Footer />
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
}

export default App;
