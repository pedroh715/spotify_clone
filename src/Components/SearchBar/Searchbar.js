import React from 'react'
import './SearchBar.css'
import SearchIcon from '@mui/icons-material/Search';

export default function Searchbar({ value, onChange }) {
    return (
        <div className="search">
            <div id='searchInput' className="d-flex">
                <input 
                    type='text' 
                    placeholder='Buscar músicas/artistas' 
                    value={value} 
                    onChange={onChange}/>

                <div id='searchIcon'>
                    <SearchIcon/>
                </div>
            </div>
        </div>
  )
}
