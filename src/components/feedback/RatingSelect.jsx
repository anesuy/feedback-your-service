
export default function RatingSelect({ select, selected }) {

  const handleChange = (e) => {
    select(+e.currentTarget.value);
    // + makes the "e.currentTarget.value" to be a NUMBER, not a STRING
  };

  return (
    <ul className="rating">
      {Array.from({ length: 10 }, (_, index) => (
        <li key={`rating-${index + 1}`}>
          <input
            type="radio"
            id={`num${index + 1}`}
            name="rating"
            value={index + 1}
            onChange={handleChange}
            checked={selected === index + 1}
          />
          <label htmlFor={`num${index + 1}`}>{index + 1}</label>
         
        </li>
      ))}
    </ul>
  );
}
