import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import mailerbox from '../assets/models/mailerbox.glb'
export function MailerBoxCom(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF(mailerbox)
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature005" position={[0, -0.139, 0.049]}>
          <group name="material_print">
            <skinnedMesh
              name="material_print_1"
              geometry={nodes.material_print_1.geometry}
              material={materials.Material_color_outside}
              skeleton={nodes.material_print_1.skeleton}
            />
            <skinnedMesh
              name="material_print_2"
              geometry={nodes.material_print_2.geometry}
              material={materials.Material_color_inside}
              skeleton={nodes.material_print_2.skeleton}
            />
            <skinnedMesh
              name="material_print_3"
              geometry={nodes.material_print_3.geometry}
              material={materials.Material_side}
              skeleton={nodes.material_print_3.skeleton}
            />
            <skinnedMesh
              name="material_print_4"
              geometry={nodes.material_print_4.geometry}
              material={materials.finishing_gold_foil}
              skeleton={nodes.material_print_4.skeleton}
            />
            <skinnedMesh
              name="material_print_5"
              geometry={nodes.material_print_5.geometry}
              material={materials.finishing_spot_gloss}
              skeleton={nodes.material_print_5.skeleton}
            />
          </group>
          <primitive object={nodes.Bone008} />
          <primitive object={nodes.neutral_bone} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload(mailerbox)
