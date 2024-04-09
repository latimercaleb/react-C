import ProfileCard from "./ProfileCard";
import AlexImg from './images/alexa.png'
import CortanaImg from './images/cortana.png'
import SiriImg from './images/siri.png'
export default function App() {
    return (
        <div>
            <h1>Sample App: Personal Assistant Store</h1>
            <ProfileCard title="Chat GPT" handle="@chatgpt" coreImg=""></ProfileCard>
            <ProfileCard title="Siri" handle="@hey_siri" coreImg={SiriImg}></ProfileCard>
            <ProfileCard title="Cortana" handle="@cortana" coreImg={CortanaImg}></ProfileCard>
            <ProfileCard title="Ok, Google" handle="@google" coreImg=""></ProfileCard>
            <ProfileCard title="Bixby" handle="@bixby" coreImg=""></ProfileCard>
            <ProfileCard title="Alexa" handle="@alexa" coreImg={AlexImg}></ProfileCard>
        </div>
    );
}