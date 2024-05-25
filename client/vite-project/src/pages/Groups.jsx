import { Add, Delete, Done, Edit as EditIcon, KeyboardBackspace as KeyboardBackspaceIcon, Menu as MenuIcon } from '@mui/icons-material'
import { Backdrop, Box, Button, Drawer, Grid, IconButton, Stack, TextField, Tooltip, Typography, } from '@mui/material'
import React, { Suspense, lazy, memo, useEffect, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import AvatarCard from '../components/shared/AvatarCard'
import { sampleChats } from '../constants/sampleData'


const ConfirmDeleteDailog = lazy(() =>
  import("../components/dalogs/ConfirmDeleteDailog"))


  const isAddMember = false

const Groups = () => {
  const chatId = useSearchParams()[0].get("group")
  const navigate = useNavigate();

  // console.log(chatId)

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isEdit, setIsEdit] = useState(false)
  const [confirmDeleteDailog, setConfirmDeleteDailog] = useState(false)

  const [groupName, setGroupName] = useState("")
  const [groupNameUpdatedValue, setGroupNameUpdatedValue] = useState("")

  const navigateBack = () => {
    navigate("/")
  }
  const handleMobile = () => {
    setIsMobileMenuOpen((prev) => !prev);
  }
  const handleMobileClose = () => setIsMobileMenuOpen(false)
  const updateGroupName = () => {
    setIsEdit(false);
    console.log(groupNameUpdatedValue)
  }


  const openconfirmDeleteHandler = () => {
    setConfirmDeleteDailog(true)
    console.log("Delete Group ")
  }
  const closeConfirmDeleteHandler = () => {
    setConfirmDeleteDailog(false)
  }
  const openAddMemberHandler = () => {
    console.log("Add Member")
  }

  const deleteHandler = () => {
    console.log("Delete handler")
    closeConfirmDeleteHandler()
  }
  useEffect(() => {
    setGroupName(`Group Name ${chatId}`)
    setGroupNameUpdatedValue(`Group Name ${chatId}`)
    return () => {
      setGroupName("")
      setGroupNameUpdatedValue("")
      setIsEdit(false)
    }
  }, [chatId])
  const IconBtns = (
    <>

      <Box sx={{
        display: {
          xs: "block",
          sm: "none",
          position: "fixed",
          right: "1rem",
          top: "1rem"
        }
      }}>
        <IconButton onClick={handleMobile} >
          <MenuIcon />
        </IconButton>
      </Box>

      <Tooltip title='back' >
        <IconButton
          sx={{
            position: "absolute",
            top: "2rem",
            left: "2rem",
            bgcolor: "rgba(0,0,0,0.8)",
            color: "darkcyan",
            ":hover": {
              bgcolor: 'transparent'
            }
          }}
          onClick={navigateBack}>
          <KeyboardBackspaceIcon />
        </IconButton>
      </Tooltip>
    </>
  )
  const GroupName = (
    <Stack direction={"row"} alignItems={"center"} justifyContent={"center"} spacing={"1rem"} padding={"2rem"}>
      {
        isEdit ? (
          <>
            <TextField value={groupNameUpdatedValue} onChange={(e) => setGroupNameUpdatedValue(e.target.value)} />
            <IconButton onClick={updateGroupName}>
              <Done /></IconButton>
          </>) : (<>
            <Typography variant='h4'>{groupName}</Typography>
            <IconButton onClick={() => setIsEdit(true)}><EditIcon /></IconButton>
          </>)
      }
    </Stack>
  )
  const ButtonGroup = (
    <Stack
      direction={{
        sm: "row",
        xb: "column-reverse",
      }}
      spacing={"1rem"}
      p={{
        sm: "1rem",
        xs: "0",
        md: "1rem 4rem"
      }}>
      <Button size='large' color="error" startIcon={<Delete />} onClick={openconfirmDeleteHandler}>Delete group</Button>
      <Button size='large' variant='contained' startIcon={<Add />} onClick={openAddMemberHandler}>add member</Button>
    </Stack>
  )

  return (
    <Grid container height={"100vh"}>
      <Grid
        item
        sx={{
          display: {
            xs: "none",
            sm: "block",

          },
        }}
        sm={4}
        bgcolor={'antiquewhite'}>
        <GroupList myGroups={sampleChats} chatId={chatId} />
      </Grid>
      <Grid item xs={12} sm={8} sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        position: 'relative',
        padding: '1rem 3rem ',

      }}> {IconBtns}

        {groupName && (
          <>
            {GroupName}
            <Typography margin={"1rem"} alignSelf={"flex-end"} variant='body1'> Members</Typography>
          </>
        )}
        <Stack maxWidth={"45rem"}
          width={"100%"}
          boxSizing={"border-box"}
          padding={{
            sm: "1rem",
            xs: "0",
            md: "1rem 4rem",
          }}
          spacing={"2rem"}
          bgcolor={"bisque"}
          height={"50vh"}
          overflow={"auto"}>
          {/* {members} */}
        </Stack>
        {ButtonGroup}

      </Grid>
      
      {
          isAddMember && <Suspense fallback={<Backdrop open />}>jfede</Suspense>
      }

      {confirmDeleteDailog && (<Suspense fallback={<Backdrop open />}>
        <ConfirmDeleteDailog open={confirmDeleteDailog} handleclose={closeConfirmDeleteHandler}
          deleteHandler={deleteHandler} />
      </Suspense>)}
      <Drawer sx={{
        display: {
          xs: "block",  // Corrected "blocl" to "block"
          sm: "none"
        }
      }} open={isMobileMenuOpen} onClose={handleMobileClose}>
        <GroupList w={"50vw"} myGroups={sampleChats} chatId={chatId} />
      </Drawer>
    </Grid>
  )
}

const GroupList = ({ w = "100%", myGroups = [], chatId }) => (
  <Stack width={"25vh"} whiteSpace={"wrap"}
    alignItems={"row"} > {myGroups.length > 0 ? ( //  to "length"
      myGroups.map((group) => (
        <GroupListItem group={group}
          chatId={chatId} key={group._id} />
      ))
    ) : (
      <Typography textAlign={"center"} padding={"1rem"}>
        No groups
      </Typography>
    )}
  </Stack>
);

const GroupListItem = memo(({ group, chatId }) => {
  const {
    name, avatar, _id } = group;

  return (
    <Link
      to={`?group=${_id}`}
      onClick={(e) => {
        if (chatId === _id) e.preventDefault(); // Corrected "chat" to "chatId"
      }}>
      <Stack direction={"row"} spacing={"1rem"} alignItems={"center"}>
        <AvatarCard avatar={avatar} />
        <Typography > {name}</Typography>
      </Stack>
    </Link>
  )
});

export default Groups;