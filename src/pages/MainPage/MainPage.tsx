import { Link } from 'react-router-dom'
import OnTrendArticlesItem from '../../components/OnTrendArticleItem/OnTrendArticleItem'
import classes from './MainPage.module.scss'
import { useContext } from 'react'
import { ArticleStorageType } from '../../types/ArticleStorageType'
import { Context } from '../../App'
import useScrollToTop from '../../hooks/useScrollToTop'

const MainPage = () => {
  const { articleStorage } = useContext(Context) as ArticleStorageType
  const neuralNetworkArticles = articleStorage.getNeuralNetworkArticles()
  const onTrendArticles = articleStorage.getOnTrendArticles()
  const lastArticles = articleStorage.getLastArticles()
  useScrollToTop()

  return (
    <main className={classes.main}>

      <div className={classes.onTrend}>
        <h2>В тренде</h2>
        <div className={classes.onTrendArticlesContainer}>
          {onTrendArticles.map(article =>
            <Link to={`/article/${article.id}`} key={article.id}>
              <OnTrendArticlesItem className={classes.narrowVersion} article={article} key={article.id} />
            </Link>)}
        </div>
      </div>

      <div className={classes.neuralNetworks}>
        <h2>Нейросети</h2>
        <div className={classes.onWideTrendArticlesContainer}>
          {neuralNetworkArticles.map(article =>
            <Link to={`/article/${article.id}`} key={article.id}>
              <OnTrendArticlesItem className={classes.wideVersion} article={article} key={article.id} />
            </Link>)}
        </div>
      </div>

      <div className={classes.recentArticles}>
        <h2>Последнии статьи</h2>
        <div className={classes.onHorizontalTrendArticlesContainer}>
          {lastArticles.map(article =>
            <Link to={`/article/${article.id}`} key={article.id}>
              <OnTrendArticlesItem className={classes.horizontalVersion} article={article} key={article.id} />
            </Link>)}
        </div>
      </div>

    </main>
  )
}

export default MainPage