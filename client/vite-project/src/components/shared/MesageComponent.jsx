import { Box, Typography } from '@mui/material';
import { lightBlue } from '@mui/material/colors';
import moment from 'moment';
import React, { memo } from 'react'
import { fileFormat } from '../../lib/features';
import RenderAttachment from './RenderAttachment';

const MesageComponent = ({ message, user }) => {
    const { sender, content, attachments = [], createdAt } = message;
    const samesender = sender?._id === user?._id;

    const timeAgo = moment(createdAt).fromNow()
  return (
    <div
    style={{
        alignSelf: samesender ?"flex-end" : "flex-start", 
        background:"white", 
        color:"black", 
        borderRadius:"5px", 
        padding:"0.5rem", 
        width:"fit-content"
    }}
    >
        {
            !samesender && <Typography color={lightBlue} fontWeight={"600"} variant='caption'>{sender.name}</Typography>
        }
        {
            content && <Typography>{content}</Typography>
        }
        {
            attachments.length > 0 && attachments.map((attachment, index) => {
             const url = attachment.url 
             const file = fileFormat(url);
             return <Box key={index}>
                <a href={url} target='_blank' download style={{
                    color:"black", 
                }}>
                    {RenderAttachment(file, url)}
                </a>
             </Box>
            })
        }
        <Typography variant='caption' fontSize={"0.7rem"} color={"text.secondary"}>{ timeAgo}</Typography>
        </div>
  )
}

export default memo( MesageComponent ) 