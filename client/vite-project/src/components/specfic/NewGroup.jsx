import { useInputValidation } from '6pp';
import { Button, Dialog, DialogTitle, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { sampleUsers, } from '../../constants/sampleData.js';
import UserItem from '../shared/UserItem.jsx';



function NewGroup() {

  const groupName = useInputValidation("")
  const [members, setMembers] = useState(sampleUsers)
  const [SelectedMembers, setSelectedMembers] = useState([])

  const submitHandler = () => { }

  const closeHandler = () => {}
  const selectMemberHandler = (id) => {
    // setMembers((prev) =>
    //   prev.map((user) =>
    //     user._id === id ? { ...user, isAdded: !user.isAdded } : user
    //   )
    // );

    setSelectedMembers((prev) =>
      prev.includes(id) ? prev.filter((currElement) => currElement !== id)
        : [...prev, id]
    )
  }
  console.log(SelectedMembers)
  return (
    <Dialog open onClose={closeHandler}>
      <Stack p={{ xs: "1rem", sm: "3rem" }} maxWidth={"25rem"} spacing={"2rem"}>
        < DialogTitle textAlign={"center"} variant="h5">New Group</ DialogTitle>
        <TextField label="Group Name" value={groupName.value} onChange={groupName.changeHandler} />
        <Typography variant='body1'>Members</Typography>
        <Stack>
          {members.map((i) => (
            <UserItem user={i} key={i._id} handler={selectMemberHandler} isAdded={
              SelectedMembers.includes(i._id)
            }
            />
          ))}
        </Stack>
        <Stack direction={"row"} justifyContent={'space-evenly'}>
          <Button variant="text" color="error" size='large'>Cancle</Button>
          <Button variant="contained" onClick={submitHandler}>Create</Button>
        </Stack>
      </Stack>
    </Dialog>
  )
}

export default NewGroup