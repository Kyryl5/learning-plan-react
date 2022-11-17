import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Header from './components/Header'
import Card from './components/Card'
import { LessonContext } from './context/LessonContext'
import useLessonsData from './hooks/useLessonsData'

export default function App() {
  const lessonsPlan = useLessonsData()
  return (
    <Box sx={{ width: '100%' }}>
      <Stack spacing={2}>
        <LessonContext.Provider value={lessonsPlan}>
          <Header />
          <Card />
        </LessonContext.Provider>
      </Stack>
    </Box>
  )
}
