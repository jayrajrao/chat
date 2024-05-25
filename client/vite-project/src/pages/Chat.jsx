import React, { useRef } from 'react'
import AppLayout from '../components/layout/AppLayout'
import { IconButton, Stack } from '@mui/material'
import { grayColor } from '../constants/color';
import { AttachFile as AttachFileIcon, Send as SendIcon } from '@mui/icons-material';
import { InputBox } from '../components/styles/StyledComponent';
import { orange } from '@mui/material/colors';
import FileMenu from '../components/dalogs/FileMenu';
import { sampleMessage } from '../constants/sampleData';
import  MesageComponent  from '../components/shared/MesageComponent'


const user = {
  _id: "fdsfsw", 
  name:"abouds", 
}

const Chat = () => {
  const containerRef = useRef(null);
  const fileMenuRef = useRef(null)
  return (
    <>
      <Stack ref={containerRef}
        boxSizing={"border-box"}
        padding={"1rem"}
        spacing={"1rem"}
        bgcolor={grayColor}
        margin={"0rem"}
        height={"90%"}

        sx={{
          overflowX: "hidden",
          overflowY: "auto",
        }}
      >
        {
        sampleMessage.map((i) => (
          <MesageComponent  key={i._id} message={i} user={user}/>
        ))
      }
      </Stack>
      <form style={{
        height: "10%",
      }}>
        <Stack direction={"row"} height={"100%"} padding={"1rem"}
          alignItems={"center"}
          position={"relative"}>
          <IconButton sx={{
            position: "absolute",
            left: "1.5rem",
            rotate: "40deg"
          }} ref={fileMenuRef}
          >
            <AttachFileIcon />
          </IconButton>
          <InputBox placeholder='Type your Message Here' />
          <IconButton type="submit" sx={{
            rotate: "-45deg",
            backgroundColor: orange,
            color: 'white',
            marginLeft: "1rem",
            padding: "0.5rem",
            "&:hover": {
              bgcolor: "error.dark"
            }
          }}>
            <SendIcon />
          </IconButton>
        </Stack>
      </form>

      <FileMenu/>

    </>
  )
}

export default AppLayout()(Chat)