export default function Links({ links }) {
  return (
    <ul>
      <h4>Links</h4>
      {links?.map((link, i) => (
        <li key={i}>
          <a href={link[1]}>{link[0]}</a>
        </li>
      ))}
    </ul>
  )
}
