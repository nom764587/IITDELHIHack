import * as TWEEN from "@tweenjs/tween.js";
import {PointerLockControls, Sky} from "@react-three/drei";
import {Ground} from "./Ground.jsx";
import {Physics,RigidBody} from "@react-three/rapier";
import {Player} from "./Player.jsx";
import {Cubes} from "./Cube.jsx";
import {useFrame} from "@react-three/fiber";
import Afro from "./Afro.jsx"
import { Vector3 } from "three";

const shadowOffset = 50;

export const Game = () => {
    useFrame(() => {
        TWEEN.update();
    });

    return (
        <>
        
            <PointerLockControls />
            <Sky sunPosition={[100, 20, 100]}/>
            <ambientLight intensity={1.5} />
            <directionalLight
                castShadow
                intensity={1.5}
                shadow-mapSize={4096}
                shadow-camera-top={shadowOffset}
                shadow-camera-bottom={-shadowOffset}
                shadow-camera-left={shadowOffset}
                shadow-camera-right={-shadowOffset}
                position={[100, 100, 0]}
            />
            <Physics gravity={[0, -50, 0]}>
                <Ground />
                <Player />
                <Cubes />
                <RigidBody type="fixed" position={new Vector3(1,0.6,1.7)}  lockRotations  >
                    <Afro   scale={0.15}/>
                    </RigidBody>
            </Physics>
        </>
    )
}




export default Game