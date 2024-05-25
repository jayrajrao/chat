import React from 'react'
import { Avatar, Stack, Typography } from '@mui/material'
import { Face as FaceIcon, AlternateEmail as UserNameIcon, CalendarMonth as CalendarIcon } from '@mui/icons-material'
import moment from 'moment'

const Profile = () => {
    return (
        <Stack spacing={"2rem"} direction={"column"} alignItems={"center"}>
            <Avatar
                sx={{
                    width: 150,
                    height: 150,
                    objectFit: "content",
                    marginBottom: "2rem",
                    border: "2px solid white",
                }}
            />
            <ProfileCard heading={"Bio"} text={"fejj"} />
            <ProfileCard heading={"Username"} text={"whf"} Icon={<UserNameIcon />} />
            <ProfileCard heading={"Name"} text={"Kaam pachiss"} Icon={<FaceIcon />} />
            <ProfileCard heading={"Joined"} text={moment('2024-03-10').fromNow('MMMM Do YYYY')} Icon={< CalendarIcon />} />

        </Stack>
    )
}
const ProfileCard = ({ text, Icon, heading }) => (<Stack direction={"row"} alignItems={"center"}
    spacing={"0.5rem"} color={"white"} textAlign={"center"}>
    {Icon && Icon}
    <Stack>
        <Typography variant="body1">{text}</Typography>
        <Typography color={"white"} variant="caption">{heading}</Typography>
    </Stack>
</Stack>
)
export default Profile