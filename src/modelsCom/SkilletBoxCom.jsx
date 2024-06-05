import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import skillet from '../assets/models/skillet.glb'
export function SkilletBoxCom(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF(skillet)
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" position={[0.001, 0, 0]} scale={0.098}>
          <group name="Mesh_0001">
            <skinnedMesh
              name="Mesh_0001_1"
              geometry={nodes.Mesh_0001_1.geometry}
              material={materials.Material_color_outside}
              skeleton={nodes.Mesh_0001_1.skeleton}
            />
            <skinnedMesh
              name="Mesh_0001_2"
              geometry={nodes.Mesh_0001_2.geometry}
              material={materials.Material_color_inside}
              skeleton={nodes.Mesh_0001_2.skeleton}
            />
            <skinnedMesh
              name="Mesh_0001_3"
              geometry={nodes.Mesh_0001_3.geometry}
              material={materials.Material_side}
              skeleton={nodes.Mesh_0001_3.skeleton}
            />
            <skinnedMesh
              name="Mesh_0001_4"
              geometry={nodes.Mesh_0001_4.geometry}
              material={materials.finishing_gold_foil}
              skeleton={nodes.Mesh_0001_4.skeleton}
            />
            <skinnedMesh
              name="Mesh_0001_5"
              geometry={nodes.Mesh_0001_5.geometry}
              material={materials.finishing_spot_gloss}
              skeleton={nodes.Mesh_0001_5.skeleton}
            />
          </group>
          <primitive object={nodes.Bone} />
          <primitive object={nodes.neutral_bone} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload(skillet)