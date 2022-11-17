import TextField from '@mui/material/TextField'
import { useEffect, useState } from 'react'

export default function Comments({ item }) {
  const [comment, setComment] = useState('')
  const [comments, setComments] = useState([])

  function onChangeHandler(e) {
    setComment(e.target.value)
  }

  function addComment(event) {
    if (event.key === 'Enter') {
      setComments([...comments, comment])
      setComment('')
    }
  }

  useEffect(() => {
    const comments = localStorage.getItem(`coments-${item.name}`)
    if (comments) {
      setComments(JSON.parse(comments))
    }
  }, [])

  useEffect(() => {
    if (comments.length) {
      localStorage.setItem(`coments-${item.name}`, JSON.stringify(comments))
    }
  }, [comments])

  return (
    <>
      <TextField
        onChange={onChangeHandler}
        value={comment}
        id="filled-basic"
        label="Press 'Enter' to Add Comment"
        variant="filled"
        fullWidth
        onKeyPress={addComment}
      />
      {comments.map((el, i) => (
        <p key={i}>{el}</p>
      ))}
    </>
  )
}
