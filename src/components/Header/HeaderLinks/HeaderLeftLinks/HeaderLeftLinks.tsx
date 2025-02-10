import NavLink from "../../../NavLink/NavLink"
import classes from "./HeaderLeftLinks.module.scss"

const HeaderLeftLinks = () => {
    return (
        <div className={classes.headerLinks}>
            <nav>
                <ul>
                    <li><NavLink src="/img/feed.png" to="/">Лента</NavLink></li>
                    <li><NavLink src="/img/guide.png" to="/">Гайды</NavLink></li>
                    <li><NavLink src="/img/education.png" to="/">Обучение</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}

export default HeaderLeftLinks