/* eslint-disable no-undef */
import * as THREE from "three";
import * as RAPIER from "@dimforge/rapier3d-compat"
import * as TWEEN from "@tweenjs/tween.js";
import {CapsuleCollider, RigidBody, useRapier} from "@react-three/rapier";
import {useEffect, useRef, useState} from "react";
import {usePersonControls} from "./hooks.js";
import {useFrame} from "@react-three/fiber";
// import {Weapon} from "./Weapon.jsx";
import Afro from "./Afro.jsx"
import { Vector3 } from "three";
import { useNavigate } from "react-router-dom";

const MOVE_SPEED = 5;
const direction = new THREE.Vector3();
const frontVector = new THREE.Vector3();
const sideVector = new THREE.Vector3();
const rotation = new THREE.Vector3();

export const Player = () => {
    const playerRef = useRef();
    const { forward, backward, left, right, jump } = usePersonControls();
    const objectInHandRef = useRef();

    const swayingObjectRef = useRef();
    // const [swayingAnimation, setSwayingAnimation] = useState(null);
    // const [swayingBackAnimation, setSwayingBackAnimation] = useState(null);
    // const [isSwayingAnimationFinished, setIsSwayingAnimationFinished] = useState(true);
    // const [swayingNewPosition, setSwayingNewPosition] = useState(new THREE.Vector3(-0.005, 0.005, 0));
    // const [swayingDuration, setSwayingDuration] = useState(1000);
    // const [isMoving, setIsMoving] = useState(false);

    const rapier = useRapier();
    const navigate = useNavigate();
    function OpenMeating(){
        navigate("/meet")
    }
    useFrame((state) => {
        if (!playerRef.current) return;

        // moving player
        const velocity = playerRef.current.linvel();

        frontVector.set(0, 0, backward - forward);
        sideVector.set(left - right, 0, 0);
        direction.subVectors(frontVector, sideVector).normalize().multiplyScalar(MOVE_SPEED).applyEuler(state.camera.rotation);

        playerRef.current.wakeUp();
        playerRef.current.setLinvel({ x: direction.x, y: velocity.y, z: direction.z });

        // jumping
        // const world = rapier.world;
        // const ray = world.castRay(new RAPIER.Ray(playerRef.current.translation(), { x: 0, y: -1, z: 0 }));
        // const grounded = ray && ray.collider && Math.abs(ray.toi) <= 1.5;

        // if (jump && grounded) doJump();

        // moving camera
        const {x, y, z} = playerRef.current.translation();
        state.camera.position.set(x, y, z);
        // moving object in hand for the player
        objectInHandRef.current.rotation.copy(state.camera.rotation);
        objectInHandRef.current.position.copy(state.camera.position).add(state.camera.getWorldDirection(rotation));
        if(z<=4.5 && -0.9<=z){
            // playerRef.current.position.set([x,])
            
            console.log(z)
            OpenMeating()
        }
        // setIsMoving(direction.length() > 0);

        // if (swayingAnimation && isSwayingAnimationFinished) {
        //     setIsSwayingAnimationFinished(false);
        //     swayingAnimation.start();
        // }
    });

    // const doJump = () => {
    //     playerRef.current.setLinvel({x: 0, y: 8, z: 0});
    // }

    // const setAnimationParams = () => {
    //     if (!swayingAnimation) return;

    //     swayingAnimation.stop();
    //     setIsSwayingAnimationFinished(true);

    //     if (isMoving) {
    //         setSwayingDuration(() => 300);
    //         setSwayingNewPosition(() => new THREE.Vector3(-0.05, 0, 0));
    //     } else {
    //         setSwayingDuration(() => 1000);
    //         setSwayingNewPosition(() => new THREE.Vector3(-0.01, 0, 0));
    //     }
    // }

    // const initSwayingObjectAnimation = () => {
    //     const currentPosition = new THREE.Vector3(0, 0, 0);
    //     const initialPosition = new THREE.Vector3(0, 0, 0);
    //     const newPosition = swayingNewPosition;
    //     const animationDuration = swayingDuration;
    //     const easing = TWEEN.Easing.Quadratic.Out;

    //     const twSwayingAnimation = new TWEEN.Tween(currentPosition)
    //         .to(newPosition, animationDuration)
    //         .easing(easing)
    //         .onUpdate(() => {
    //             swayingObjectRef.current.position.copy(currentPosition);
    //         });

    //     const twSwayingBackAnimation = new TWEEN.Tween(currentPosition)
    //         .to(initialPosition, animationDuration)
    //         .easing(easing)
    //         .onUpdate(() => {
    //             swayingObjectRef.current.position.copy(currentPosition);
    //         })
    //         .onComplete(() => {
    //             setIsSwayingAnimationFinished(true);
    //         });

    //     twSwayingAnimation.chain(twSwayingBackAnimation);

    //     setSwayingAnimation(twSwayingAnimation);
    //     setSwayingBackAnimation(twSwayingBackAnimation);
    // }

    // useEffect(() => {
    //     setAnimationParams();
    // }, [isMoving]);

    // useEffect(() => {
    //     initSwayingObjectAnimation();
    // }, [swayingNewPosition, swayingDuration]);

    return (
        <>
        {/* 1.2455276250839233 ,7.201615333557129 */}
            <RigidBody colliders={false} mass={1} ref={playerRef}  position={new Vector3(5.664928436279297,0.4951587915420532,14.827763557434082)} >
                <mesh castShadow>
                    <capsuleGeometry args={[0.5, 0.5]}/>
                    <CapsuleCollider args={[0.75, 0.5]} />
                </mesh>
            </RigidBody>
            <RigidBody colliders="cuboid">

            <group ref={objectInHandRef}>
                <group ref={swayingObjectRef}>
                    
                </group>
            </group>
            </RigidBody>
        </>
    );
}