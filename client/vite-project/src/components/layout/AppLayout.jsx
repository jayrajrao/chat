import React from 'react';
import Header from './Header'
import Title from '../../../src/components/shared/Title'
import { Grid } from '@mui/material'
// import { Title } from '@mui/icons-material'
import Chatlist from '../specfic/Chatlist'
import { sampleChats } from '../../constants/sampleData';
import { useParams } from 'react-router-dom';
import Profile from '../specfic/Profile';

const AppLayout = () => (WrappedComponent) => {
  return (props) => {
    const params = useParams()
    const chatId= params.chatId
    const handleDeleteChat = (e, _id, groupChat) =>{
      e.preventDefault();
      console.log("Delete Chat", _id, groupChat)
    }
    return (
      <>
        <Title />
        <Header />
        <Grid container height={"calc(100vh - 4rem)"}>
          <Grid item sm={4} md={3} sx={{ display: { xs: "none", sm: "block" }, }} height={"100%"} bgcolor="#534d81ba" >
            <Chatlist chats={sampleChats} chatId={chatId}
              handleDeleteChat={handleDeleteChat}/>
          </Grid>
          <Grid item xs={12} sm={8} md={5} lg={6} height={"100%"} bgcolor="#2368a2">
            <WrappedComponent {...props} />
          </Grid>
          <Grid item md={4} lg={3} height={"100%"} sx={{ display: { xs: "none", md: "block" }, padding: "2rem", bgcolor: "RGB(98, 151, 124)", }}>
            <Profile/>
          </Grid>
        </Grid>
      </>
    )
  }
}

export default AppLayout