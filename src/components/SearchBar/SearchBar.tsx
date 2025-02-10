import { useCallback, useContext, useMemo, useState } from "react";
import { Context } from "../../App";
import { ArticleType } from "../../types/ArticleType";
import classes from "./SearchBar.module.scss";
import SearchButton from "../SearchButton/SearchButton";
import SearchBarArticle from "../SearchBarArticle/SearchBarArticle";
import { Link } from "react-router-dom";
import { ArticleStorageType } from "../../types/ArticleStorageType";
import { SearchBarProps } from "../../types/props/SearchBarProps";

const SearchBar = ({ active, setActive }: SearchBarProps): JSX.Element => {
    const [value, setValue] = useState("");
    const { articleStorage } = useContext(Context) as ArticleStorageType;
    const articles = useMemo(() => articleStorage.getArticles(), [articleStorage])
    const className = `${classes.modal} ${active ? classes.active : ''}`
    const activate = (): void => setActive(true)
    const deactivate = (): void => setActive(false)
    const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>): void => setValue(e.target.value), [])
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => e.preventDefault()
    const stopPropagation = useCallback((e: React.MouseEvent): void => e.stopPropagation(), [])
    const filteredArticles = useMemo(() => 
        articles.filter(article => 
            article.title.toLowerCase().includes(value.toLowerCase())
        ), [articles, value]
    )

    return (
        <div
            className={className}
            onClick={deactivate}
        >
            <div
                className={classes.searchArea}
                onClick={activate}
                onMouseEnter={activate}
                onMouseLeave={deactivate}
            >
                <div
                    className={classes.searchBar}
                    onClick={stopPropagation}
                    onMouseEnter={activate}
                >
                    <form className={classes.searchForm} onSubmit={onSubmit}>
                        <input
                            onChange={handleInputChange}
                            type="text"
                            placeholder="Найти статью..."
                        />
                        <SearchButton />
                    </form>
                </div>
                <div
                    className={classes.foundArticles}
                    onMouseEnter={activate}
                >
                    {filteredArticles.map((article: ArticleType) => (
                        <Link to={`/article/${article.id}`} key={article.id}>
                            <SearchBarArticle article={article} />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SearchBar