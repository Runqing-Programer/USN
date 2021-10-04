import { Button } from '@mui/material'

import axios from 'axios'

import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'

import Navbar from '../../components/Navbar/Navbar'
import SideBar from '../../components/SideBar/SideBar'


import Grid from '@mui/material/Grid';
import PostingBox from '../../components/PostingBox/PostingBox.jsx'
import Post from '../../components/Post/Post.jsx'
import './UserProfile.scss'
import DefaultIcon from '../../images/128pxUser.png'

import "./UserProfile.scss"

const posts = [
  {
    _id: 1,
    text: 'This is something related to user. This is something related to user. This is something related to user. This is something related to user. This is something related to user. This is something related to user. This is something related to user. This is something related to user. This is something related to user. This is something related to user. This is something related to user. This is something related to user. This is something related to user. This is something related to user. This is something related to user. This is something related to user. ',
    shares: 10,
    likes: 52,
  },
  {
    _id: 2,
    text: 'This is something related to user. This is something related to user. This is something related to user. This is something related to user. This is something related to user. This is something related to user. This is something related to user. This is something related to user. This is something related to user. This is something related to user. This is something related to user. This is something related to user. This is something related to user. This is something related to user. This is something related to user. This is something related to user. This is something related to user. This is something related to user. ',
    shares: 10,
    likes: 52,
  },
]

const UserProfile = ({ setCircle, setSnackbar }) => {

  
  
 
  const [details, setDetails] = useState([])

  const [userName, setuserName] = useState('')
  
  
  const history = useHistory()
  const accessToken = localStorage.getItem('accessToken')
  const userID = localStorage.getItem('userID')

  const [uniHist, setUniHist] = useState([])



  const handleSubmit = () => {
    history.push('/users/nate')
  };





  useEffect(() => {
    const token = localStorage.getItem('accessToken')
    setCircle(true)
    if (accessToken) {
      const fetchData = async () => {
        try {



          const success = await axios.get(`/users/6124bee645e6d377f039326f`, {

            headers: {
              Authorization: `Bearer ${token}`,
            },
          })

          console.log(success_user_prof_obj)


          // Fetch data - Need API route first
          console.log('UserProfile Successful')
        } catch (error) {
          // console.log(error)
        }
      }
      fetchData()
    } else {
      console.log('Im here')
      history.push('/login', { text: 'hellooooooo' })
    }
    setCircle(false)
  }, [history, accessToken])

  return (
    <div className="mainContainer">
      <Navbar/>
      <Grid container className="bodyContainer">
        {/* SideBar */}
        <Grid item md={3} sm={4} xs={12} className="sideBar">
          <SideBar details = {details} userName = {userName} handleSubmit = {handleSubmit}/>
        </Grid>
        
        <Grid item md={9} sm = {8} xs={12}>
          
          <div className='postingContainer'>
            <PostingBox />
          </div>
          <div className='postsContainer'>
            <Post posts={posts} />
          </div>
        </Grid>
      </Grid>
    </div>       
  ,[history, setCircle, accessToken])

  
}

export default UserProfile
