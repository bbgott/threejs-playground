import { Canvas } from '@react-three/fiber'
import { useGLTF, OrbitControls, Stage } from '@react-three/drei'
import { Suspense } from 'react'
import Smoke from './Smoke'

function VolcanoModel() {
  const { scene } = useGLTF('/Volcano.glb')
  return <primitive object={scene} />
}

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh', backgroundColor: '#111' }}>
      <Canvas camera={{ position: [0, 2, 5], fov: 45 }}>
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.6}>
            <VolcanoModel />
            <Smoke />
          </Stage>
          <OrbitControls
            makeDefault
            autoRotate
            maxPolarAngle={Math.PI / 2} // Prevent camera from going below the ground
            minPolarAngle={Math.PI / 6} // Limit how high the camera can go
          />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default App
