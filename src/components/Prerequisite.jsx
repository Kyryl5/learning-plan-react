export default function Prerequisite({ prerequisites }) {
  return (
    prerequisites && (
      <ul>
        <h4>Prepare for lesson</h4>
        {prerequisites?.map((prerequisite, i) => (
          <li key={i}>
            <p>{prerequisite}</p>
          </li>
        ))}
      </ul>
    )
  )
}
