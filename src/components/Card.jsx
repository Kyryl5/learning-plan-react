import { Paper } from '@mui/material'
import { useContext, useState } from 'react'
import { LessonContext } from '../context/LessonContext'
import Links from './Links'
import HomeTasks from './HomeTasks'
import Comments from './Comments'
import CheckBox from './CheckBox'
import Prerequisite from './Prerequisite'
import KeyPoints from './KeyPoints'
import VideoOfLessons from './VideoOfLessons'

export default function Card() {
  const lessonsPlan = useContext(LessonContext)

  const [onCheckBox, setOnCheckbox] = useState(
    JSON.parse(localStorage.getItem('checkboxes')) || {}
  )

  return lessonsPlan.map((item, index) => (
    <Paper
      sx={{ p: 1 }}
      elevation={10}
      key={index}
      style={{ backgroundColor: onCheckBox[item.name] ? 'lightgrey' : 'white' }}
    >
      <h2>
        {item.type} "{item.title}"
      </h2>
      <KeyPoints keyPoints={item.keyPoints} />
      <Prerequisite prerequisites={item.prerequisite} />
      <Links links={item.links} />
      <HomeTasks hometasks={item.hometask} />
      <VideoOfLessons item={item} />
      <CheckBox
        item={item}
        onCheckBox={onCheckBox}
        setOnCheckbox={setOnCheckbox}
      />
      <Comments item={item} />
    </Paper>
  ))
}
