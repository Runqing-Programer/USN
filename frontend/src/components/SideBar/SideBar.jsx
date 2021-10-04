import React from 'react'
import Grid from '@mui/material/Grid';

import DefaultIcon from "../../images/128pxUser.png"

import FormDialog from '../../components/FormDialog/FormDialog'


const SideBar = ({details, userName, handleSubmit}) => {
    return (
        <Grid container >
            <Grid item md={5} sm={12} xs={12} style={{padding: '10px'}}>
                <img id="userIcon" src={DefaultIcon}/> 
            </Grid>
            <Grid item md={7} sm={12} xs={12} style={{padding: '10px'}}>
                {userName}<br/>
                Location<br/>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                {/*58 chars allowed for Short Discription*/}
            </Grid>
            <Grid item xs={12} style={{padding: '10px'}}>
                <ul>
                    {details.map(obj => {return (
                        <li style={{margin: '20px'}}>
                            {obj.name}
                            <br/>
                            {obj.course}
                        </li>
                    )})}
                </ul>
            </Grid>

            <Grid item xs={12} style={{textAlign: "center"}}>
                <FormDialog handleSubmit = {handleSubmit}/>
            </Grid>
        </Grid>
    )
}
export default SideBar





