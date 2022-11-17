import { useEffect, useState } from 'react'

export default function useLessonsData() {
  const [lessonsPlan, setLessonsPlan] = useState([])

  useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/Drag13/react-learning-course-short/master/course.json'
    )
      .then((x) => x.json())
      .then((response) => {
        setLessonsPlan(response.lessons)
      })
  }, [])
  return lessonsPlan
}
