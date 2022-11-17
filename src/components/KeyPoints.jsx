export default function KeyPoints({ keyPoints }) {
  return (
    keyPoints && (
      <ul className="keypoints">
        <h4>Lesson Topics</h4>
        {keyPoints?.map((keypoint, i) => (
          <li key={i}>
            <p>{keypoint}</p>
          </li>
        ))}
      </ul>
    )
  )
}
