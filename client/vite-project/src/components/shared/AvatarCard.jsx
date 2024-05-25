import { Avatar, AvatarGroup, Box, Stack } from '@mui/material'
import React from 'react'
import { transformImage } from '../../lib/features.js'

const AvatarCard = ({ avatar = [], max = 4 }) => {
    return <Stack direction={"row"} spacing={0.5}>
        <AvatarGroup max={max}>
            <Box width={"5rem"} height={"3rem"}>
                {avatar.map((i, index) => (
                    <Avatar
                        key={Math.random() * 100}
                        src={transformImage(i)}
                        alt={`Avatar ${index}`}
                        sx={{
                            width: "2rem",
                            height: "2rem",
                            position: "absolute",
                            left: {
                                xs: `${0.5 + index}rem`,
                                sm: `${index}rem`,
                            }
                        }}
                    />
                ))}
            </Box>
        </AvatarGroup>
    </Stack>


}

export default AvatarCard


// 50,000 + 10,000 + 15,000 = 75,000 - 40,000 = 35,000 