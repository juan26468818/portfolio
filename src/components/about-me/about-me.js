import "./about-me.css"
import profilePic from "../../img/Profile-pic.jpeg"

const AboutMe = ()=>{
    return(
        <section id="about-me">
            <h2>Hello there.{/*General Kenobi*/} Welcome to my page! 👋</h2>
            <div class="about-me-container">
                <picture></picture>
                <img src={profilePic} class="profile-pic" />
                <div class="about-me-description-container">
                    <p class="about-me-description">Here are some <b>facts</b> about me:</p>
                    <ul>
                        <li class="about-me-item">I've been learning about technology and programming since I was <b>14 years old.</b> 💻</li>
                        <li class="about-me-item">I can speak in <b>Spanish, English and Italian!</b> I'm also learning Portuguese.</li>
                        <li class="about-me-item">One of my passions is <b>Music</b> and I love to play guitar and piano in my free time.</li>
                        <li class="about-me-item">I'm quite a <b>Geek</b> that loves to play VideoGames and watching <b>The Lord Of The Rings.</b></li>
                        <li class="about-me-item">Astronomy, Psychology and Finance are some of the subjects I love to talk about.</li>
                        <li class="about-me-item">Aqui algo</li>
                        <li class="about-me-item">Aqui algo</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default AboutMe;