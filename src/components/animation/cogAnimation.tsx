import React from 'react'
import { useSpring, animated } from "react-spring";
import Cog from "../../media/cog.png"

export default function CogAnimation() {
    const FIRST_ANIMATION = useSpring({
        from:{x: -800},
        to:{x:-400 },
        config:{mass: 1, tension: 60, friction: 60}
    })

    const SECOND_ANIMATION = useSpring({
        from:{rotateZ: 0},
        to:{rotateZ: -270},
        config: {mass: 1, tension: 80, friction: 20, frequency: 10, damping: 1},
        delay:1500
    })
  
    return (
        <animated.div className="Cog-Animation-Main" style={FIRST_ANIMATION}>
            <animated.div style={SECOND_ANIMATION}>
                <img alt="" src={Cog}/>
            </animated.div>
        </animated.div>
    
  )
}
