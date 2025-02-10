import { OnTrendArticleItemProps } from '../../types/props/OnTrendArticleItemProps'
import Tag from '../Tag/Tag'
import classes from './OnTrendArticleItem.module.scss'

const OnTrendArticlesItem = ({ className, article }: OnTrendArticleItemProps): JSX.Element => {
    return (
        <div className={`${classes.onTrendArticlesItem} ${className}`}>
            <figure className={classes.itemImg}>
                <img src={article.mainImage} alt='article' />
            </figure>
            <div className={classes.contentArea}>
                <p>{article.title}</p>
                <div className={classes.tagArea}>
                    <Tag name='Нейросеть' />
                    <Tag name='Guide' />
                </div>
            </div>
            <div className={classes.infoArea}>
                <div><p>Советы</p></div>
            </div>
        </div>
    )
}

export default OnTrendArticlesItem