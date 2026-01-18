import NewMeetupForm from "../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
  // helper methods
  const handleAddMeetup = (meetupData) => {

  }

  // return component
  return <section>
    <h1>Add New Meetup</h1>
    <NewMeetupForm onAddMeetup={handleAddMeetup} />
  </section>
};
export default NewMeetupPage;
