import { Link } from "react-router-dom"
import HeaderLeftLinks from "./HeaderLinks/HeaderLeftLinks/HeaderLeftLinks"
import { useState } from "react"
import classes from "./Header.module.scss"
import SearchButton from "../SearchButton/SearchButton"
import SearchBar from "../SearchBar/SearchBar"

const Header = (): JSX.Element => {
    const [modalActive, setModalActive] = useState(false)
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const onMouseEnter = (): void => setModalActive(true)
    const onClick = (): void => setModalActive(true)

    return (
        <header className={classes.header}>
            <div className={classes.headerLeftPart}>
                <figure>
                    <Link to="/"><img src="/img/logo.png" className={classes.image} alt="logotype" /></Link>
                </figure>
                <HeaderLeftLinks />
            </div>

            <div className={classes.headerRightPart}>
                {isMobile ? <SearchButton onClick={onClick} /> : <SearchButton onMouseEnter={onMouseEnter} />}
                <SearchBar active={modalActive} setActive={setModalActive} />
            </div>
        </header>
    )
}

export default Header