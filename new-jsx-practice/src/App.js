import ProfileCard from './ProfileCard';
import AlexImg from './images/alexa.png';
import CortanaImg from './images/cortana.png';
import SiriImg from './images/siri.png';
import BixbyImg from './images/bixby.png';
import ChatGPT from './images/chat-gpt-logo.png';
import Google from './images/google-assistant.png';
import 'bulma';

export default function App() {
	return (
		<div>
			<section className="hero is-info">
				<div className="hero-body">
					<p className="title">Sample App 1: Personal Assistant Store</p>
				</div>
			</section>
			<div className="container">
				<section className="section">
					<div className="columns">
						<div className="column is-4">
							<ProfileCard
								title="Chat GPT"
								handle="@chatgpt"
								coreImg={ChatGPT}
								desc="Chat GPT How can I help you today?"
							/>
						</div>
						<div className="column is-4">
							<ProfileCard
								title="Siri"
								handle="@hey_siri"
								coreImg={SiriImg}
								desc="Get your every day tasks done using your voice"></ProfileCard>
						</div>
						<div className="column is-4">
							<ProfileCard
								title="Cortana"
								handle="@cortana"
								coreImg={CortanaImg}
								desc="Cortana the microsoft assistant!"></ProfileCard>
						</div>
					</div>
					<div className="columns">
						<div className="column is-4">
							<ProfileCard
								title="Ok, Google"
								handle="@google"
								coreImg={Google}
								desc="Google Assistant your hands-free helper!"></ProfileCard>
						</div>
						<div className="column is-4">
							<ProfileCard
								title="Bixby"
								handle="@bixby"
								coreImg={BixbyImg}
								desc="Do more with Samsung Bixby!"></ProfileCard>
						</div>
						<div className="column is-4">
							<ProfileCard
								title="Alexa"
								handle="@alexa"
								coreImg={AlexImg}
								desc="Alexa the amazon assistant"></ProfileCard>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}
