import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function Smoke() {
    const count = 20
    const meshRef = useRef()

    useFrame((state) => {
        const time = state.clock.getElapsedTime()

        for (let i = 0; i < count; i++) {
            const matrix = new THREE.Matrix4()

            const x = Math.sin(i + time * 0.5) * 0.2
            const y = ((i * 0.5 + time) % 5)
            const z = Math.cos(i + time * 0.5) * 0.2

            matrix.setPosition(x, y, z)
            
            const scale = 1 - (y / 5)
            matrix.scale(new THREE.Vector3(scale, scale, scale))
            
            meshRef.current.setMatrixAt(i, matrix)
        }
        meshRef.current.instanceMatrix.needsUpdate = true
    })

    return (
        <instancedMesh ref={meshRef} args={[null, null, count]} position={[0, 1.5, 0]}>
            <sphereGeometry args={[0.6, 8, 8]} />
            <meshStandardMaterial color="#888" transparent opacity={0.4} />
        </instancedMesh>
    )
}

export default Smoke