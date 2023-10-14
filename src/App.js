import "bulma/css/bulma.css";
import ProfileCard from "./ProfileCard";
import alexa from "./images/alexa.png";
import cortana from "./images/cortana.png";
import siri from "./images/siri.png";
import "./styles.css";

function App() {
  return (
    <div className="container">
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Digital Assitants</p>
        </div>
      </section>

      <div className="section">
        <div className="columns">
          <div className="column is-4">
            <ProfileCard
              name="Alexa"
              avatarURL={alexa}
              description="Alexa is a virtual assistant developed by Amazon, first used in the Amazon Echo and the Amazon Echo Dot smart speakers developed by Amazon Lab126. It is capable of voice interaction, music playback, making to-do lists, setting alarms, streaming podcasts, playing audiobooks, and providing weather, traffic, sports, and other real-time information, such as news. Alexa can also control several smart devices using itself as a home automation system. Users are able to extend the Alexa capabilities by installing 'skills' (additional functionality developed by third-party vendors, in other settings more commonly called apps such as weather programs and audio features). Most devices with Alexa allow users to activate the device using a wake-word (such as Alexa or Amazon); other devices (such as the Amazon mobile app on iOS or Android and Amazon Dash Wand) require the user to push a button to activate Alexa's listening mode."
            />
          </div>
          <div className="column is-4">
            <ProfileCard
              name="Cortana"
              avatarURL={cortana}
              description="Cortana is a virtual assistant created by Microsoft for Windows 10, Windows 10 Mobile, Windows Phone 8.1, Invoke smart speaker, Microsoft Band, Surface Headphones, Xbox One, iOS, Android, Windows Mixed Reality, and Amazon Alexa. Cortana can set reminders, recognize natural voice without the requirement for keyboard input, and answer questions using information from the Bing search engine. Cortana is currently available in English, Portuguese, French, German, Italian, Spanish, Chinese, and Japanese language editions, depending on the software platform and region in which it is used. Cortana mainly competes against assistants such as Apple Siri, Google Assistant, and Amazon Alexa."
            />
          </div>
          <div className="column is-4">
            <ProfileCard
              name="Siri"
              avatarURL={siri}
              description="Siri is a virtual assistant that is part of Apple Inc.'s iOS, iPadOS, watchOS, macOS, and tvOS operating systems. The assistant uses voice queries and a natural-language user interface to answer questions, make recommendations, and perform actions by delegating requests to a set of Internet services. The software adapts to users' individual language usages, searches, and preferences, with continuing use. Returned results are individualized."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
