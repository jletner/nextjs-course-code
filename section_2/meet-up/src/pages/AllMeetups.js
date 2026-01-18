import DUMMY_DATA from "../data/DUMMY_DATA";

const AllMeetupsPage = () => {
  return <section>
    <h1>All Meetups</h1>
    <ul>
      {DUMMY_DATA.map((m) => {
        return (
          <li key={m.id}>{m.title}</li>
        )
      })}
    </ul>
  </section>;
};
export default AllMeetupsPage;
