const Todo = ({ title, startDate, endDate, progress, assignedTo }) => {
  // helper methods
  const handleDelete = () => {
    alert(`Deleted ${title}`);
  };

  // Return component
  return (
    <div className="card">
      <h2>{title}</h2>
      <div className="actions">
        <button className="btn" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};
export default Todo;
