export default function HomeTasks({ hometasks }) {
  return (
    hometasks && (
      <ul>
        <h4>Hometask</h4>
        {hometasks?.map((hometask, i) => (
          <li key={i}>
            <p>{hometask}</p>
          </li>
        ))}
      </ul>
    )
  )
}
