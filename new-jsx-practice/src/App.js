import ProfileCard from "./ProfileCard";
import AlexImg from './images/alexa.png'
import CortanaImg from './images/cortana.png'
import SiriImg from './images/siri.png'
import 'bulma';

export default function App() {
    // TODO: Add images for other links
    // Do additional styling in bulma
    // Get prettier to work so you dont have to manually format while doing this, wasting alot of time
    // Add description prop
    // Do something about custom component self-closing tag
    return (
        <div>
            <section className="hero is-primary">
                <div className="hero-body">
                    <p className="title">Sample App 1: Personal Assistant Store</p>
                </div>
            </section>
            <div className="container">
                <section className="section">
                    <div className="columns">
                        <div className="column is-4">
                        <ProfileCard title="Chat GPT" handle="@chatgpt" coreImg="" />
                        </div>
                        <div className="column is-4">
                        <ProfileCard title="Siri" handle="@hey_siri" coreImg={SiriImg}></ProfileCard>
                        </div>
                        <div className="column is-4">
                        <ProfileCard title="Cortana" handle="@cortana" coreImg={CortanaImg}></ProfileCard>
                        </div>
                    </div>
                    <div className="columns">
                    <div className="column is-4">

                    </div>
                    <div className="column is-4">

                    </div>
                    <div className="column is-4">

                    </div>
                    </div>
                </section>
            </div>
            <ProfileCard title="Ok, Google" handle="@google" coreImg=""></ProfileCard>
            <ProfileCard title="Bixby" handle="@bixby" coreImg=""></ProfileCard>
            <ProfileCard title="Alexa" handle="@alexa" coreImg={AlexImg}></ProfileCard>
        </div>
    );
}