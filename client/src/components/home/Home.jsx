import UpcomingEvents from "./event/UpcomingEvents";
import Teachers from "./Teachers";
import WisdomWords from "./WisdomWords";

const Home = () => {
  return (
    <main>
      <section>
        <UpcomingEvents />
      </section>
      <section>
        <Teachers />
      </section>
      <section>
        <WisdomWords />
      </section>
    </main>
  );
};

export default Home;