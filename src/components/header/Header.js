import "./Header.css"

const Header = ()=>{
    return(
        <header>
            <h1>Juan Ayala</h1>
            <nav>
                <ul class="header__nav-bar-container">
                    <li><a href="#Portfolio">Portfolio</a></li>
                    <li><a href="#about-me">About me</a></li>
                    <li><a href="#">Hobbies</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header