import { Canvas } from '@react-three/fiber'
import { useGLTF, OrbitControls, Stage } from '@react-three/drei'
import { Suspense } from 'react'

function VolcanoModel() {
  const { scene } = useGLTF('/Volcano.glb')
  return <primitive object={scene} />
}

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh', backgroundColor: '#111' }}>
      <Canvas camera={{ position: [0, 2, 5], fov: 45 }}>
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.5}>
            <VolcanoModel />
          </Stage>
          <OrbitControls makeDefault autoRotate/>
        </Suspense>
      </Canvas>
    </div>
  )
}

export default App
