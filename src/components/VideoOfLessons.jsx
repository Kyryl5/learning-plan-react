import YouTubeIcon from '@mui/icons-material/YouTube'

export default function VideoOfLessons({ item }) {
  return (
    item.youtube && (
      <ul>
        <h4>Lesson video</h4>
        <a href={item.youtube}>
          <YouTubeIcon fontSize="large" color="error" />
        </a>
      </ul>
    )
  )
}
