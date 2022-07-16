import React from 'react'
import {Link} from "react-router-dom";
import { animated, Spring } from "react-spring";
import imageArray from '../constants/imageArray';


export default function IconGrind() {

    const  IMG_ARRAY = imageArray()
    var delayTime = 2000;

  return (
    <div className='grid_Container'>
        {IMG_ARRAY.map(x =>{
            delayTime = x.delay
            if(x.isExt){
                return(<div className='grid_Item'>
                    <a href={x.link} target="_blank" rel="noreferrer">
                        <div className='grid_box'>
                            <Spring 
                            from={{rotateZ: -145, scale: 1.3}}
                            to={{ rotateZ: 0 , scale: 1}}
                            config={{mass: 1, tension: 60, friction: 60}}
                            delay={delayTime}>
                                {logoAnimation =>(
                                <animated.div style={{height: 120, position: "absolute", marginRight: 20, display: "block", ...logoAnimation }}>
                                    <img alt={x.imgAlt} src={x.img}/>
                                </animated.div>)}
                            </Spring>
                        </div>
                    </a>
                </div>

                )
            }else{
                return(<div className='grid_Item'>
                    <Link to={x.link} >
                    <div className='grid_box'>
                        <Spring 
                        from={{rotateZ: -145, scale: 1.3}}
                        to={{ rotateZ: 0 , scale: 1}}
                        config={{mass: 1, tension: 60, friction: 60}}
                        delay={delayTime}>
                            {logoAnimation =>(
                            <animated.div style={{height:120, marginRight: 20, position: "absolute", ...logoAnimation }}>
                                <img alt={x.imgAlt} src={x.img}/>
                            </animated.div>)}
                        </Spring>
                    </div>
                    </Link>
                </div>
                )
            }
        })}


    </div>
  )
}
