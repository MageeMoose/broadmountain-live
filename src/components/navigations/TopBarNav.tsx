import React from 'react'
import {Outlet, Link} from "react-router-dom";
import navLinkArray from '../constants/navLinkArray';

export default function TopBarNav() {
    const LINK_ARRAY = navLinkArray()
  
    return (
    <div className='topBar'>
            {LINK_ARRAY.map(x => (
                x.isExt
                    ?<div className='topBar_item'><a href={x.link} target="_blank">{x.text}</a></div>
                    :<div className='topBar_item'><Link to={x.link}>{x.text}</Link></div>
            ))

            }
    </div>
  )
}
