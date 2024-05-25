import { Stack, Box, Typography } from '@mui/material'
import { Link } from '../styles/StyledComponent'
import React, { memo } from 'react'
import AvatarCard from './AvatarCard';


const ChatItem = ({
    avatar = [],
    name,
    _id,
    groupChat = false,
    isOnline,
    newMessageAlert,
    index = 0,
    handleDeleteChat,
}) => {
    return (
        <Link 
        sx={{padding:"0"}}
        to={`/chat/${_id}`} onContextMenu={(e) => handleDeleteChat(e, _id, groupChat)}>
            <div style={{
                display: "flex",
                gap: "1rem",
                position: "relative",
                alignItems: "center",
                padding: "1rem",
                // background: sameSender ? "black" : "unset",
                // color: sameSender ? "white" : "black",
            }}>
              <AvatarCard avatar={avatar}/>
                <Stack>
                    <Typography>{name}</Typography>
                    {newMessageAlert && (
                        <Typography>
                            {newMessageAlert.count} New Message
                        </Typography>
                    )}
                </Stack>

                {isOnline && (
                    <Box sx={{
                        width: "10px",
                        height: "10px",
                        borderRadius: "50%",
                        position: "absolute",
                        top: "50%",
                        right: "1rem",
                        transform: "translateY(-50%)",
                    }}>
                    </Box>
                )}
            </div>
        </Link>
    );
}

export default memo(ChatItem);

