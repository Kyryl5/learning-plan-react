import { Checkbox, FormControlLabel } from '@mui/material'

export default function CheckBox({ item, onCheckBox, setOnCheckbox }) {
  const changeHandler = (event) => {
    localStorage.setItem(
      `checkboxes`,
      JSON.stringify({
        ...onCheckBox,
        [event.target.name]: event.target.checked,
      })
    )
    setOnCheckbox({ ...onCheckBox, [event.target.name]: event.target.checked })
  }

  return (
    <FormControlLabel
      label="I learned this lesson !"
      control={
        <Checkbox
          name={item.name}
          checked={onCheckBox[item.name]}
          onChange={changeHandler}
          color="primary"
          key={Date.now()}
          sx={{ '& .MuiSvgIcon-root': { fontSize: 40 } }}
        />
      }
    ></FormControlLabel>
  )
}
