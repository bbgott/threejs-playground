import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'
import { Suspense } from 'react'
import { Volcano } from './components/Volcano.tsx'
import Smoke from './components/Smoke.tsx'

function App() {
  return (
    <div className="w-screen h-screen bg-[#111]">
      <Canvas camera={{ position: [0, 2, 5], fov: 45 }}>
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.6}>
            <Volcano />
            <Smoke />
          </Stage>
          <OrbitControls
            makeDefault
            autoRotate
            minDistance={10} // Prevent camera from getting too close
            maxDistance={20} // Prevent camera from getting too far
            maxPolarAngle={Math.PI / 2} // Prevent camera from going below the ground
            minPolarAngle={Math.PI / 6} // Limit how high the camera can go
            enablePan={false} // Disable panning to keep the focus on the model
          />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default App
