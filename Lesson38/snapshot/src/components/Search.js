import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import {baseURL} from './config';

const Search = ({getImages})=>{
    const [name, setNames]=useState('');
    const SearchPics =()=>{
        axios.get(baseURL(name))
        .then(res =>{
            console.log(res.data);
            getImages(res.data.photos.photo);
        })
    }
    // const SearchName = (event)=>{
    //     console.log('56');
    //     name(event.target.value);
    // }
        
    return(
        <>
           <TextField id="outlined-basic" label="Outlined" variant="outlined" onChange={(event)=>setNames(event.target.value)}/>
           <Button variant="contained" onClick={SearchPics}>Search</Button>
        </>
     )
} 
export default Search;