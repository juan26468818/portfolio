import Header from "../../components/header/Header"
import Projects from "../../components/projects/projects"
import theCountryGame from "../../img/The-country-game.png";
import fourCardSection from "../../img/Four-card-section.png";
import huddleLandingPage from "../../img/Huddle-landing-page.png";
import pingComingSoonPage from "../../img/Ping-coming-soon-page.png";
import signUpForm from "../../img/sign-up-form.png";
import whereIsThisIPFrom from "../../img/Where-is-this-ip-from.png";
import "./Home.css"

const Home = () =>{
    return(
        <div>
            <Header/>
            <main>
            <section id="Portfolio">
                <h2>Portfolio</h2>
                <div class="portfolio-section">
                    <Projects image={theCountryGame} name="The Country Game" 
                    code="https://github.com/juan26468818/the_country_game" web="https://the-country-game.vercel.app/"/>

                    <Projects image={fourCardSection} name="Four Card Section" 
                    code="https://github.com/juan26468818/four-card-feature-section" web="https://four-card-feature-section-liard-omega.vercel.app/"/>

                    <Projects image={huddleLandingPage} name="Huddle Landing Page" 
                    code="https://github.com/juan26468818/huddle-landing-page-with-a-single-introductory-section" web="https://huddle-landing-page-with-a-single-introductory-section-two-pi.vercel.app/"/>

                    <Projects image={pingComingSoonPage} name="Ping Coming Soon Page" 
                    code="https://github.com/juan26468818/ping-coming-soon-page" web="https://ping-coming-soon-page-omega-nine.vercel.app/"/>

                    <Projects image={signUpForm} name="Sign Up Form" 
                    code="https://github.com/juan26468818/intro-component-with-signup-form" web="https://intro-component-with-signup-form-chi-steel.vercel.app/"/>

                    <Projects image={whereIsThisIPFrom} name="Where Is This IP From" 
                    code="https://github.com/juan26468818/deDondeEsEstaIP" web="https://idyllic-daifuku-d7f55c.netlify.app/"/>



                </div>
                <div class="see-more-container">
                    <a href="#" class="see-more">See More...</a>
                </div>
            </section>
            </main>
        </div>
    )
}

export default Home