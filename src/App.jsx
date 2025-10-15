import { lazy, Suspense } from 'react';
import './App.css';

// Lazy load all sections
const Hero = lazy(() => import('./sections/Hero'));

// Loading fallback component
const LoadingFallback = () => (
  <div className="flex items-center justify-center py-20">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
  </div>
);

function App() {
  return (
    <main className="bg-gray-900 text-white min-h-screen">
      <Suspense fallback={<LoadingFallback />}>
        <Hero />
      </Suspense>
    </main>
  );
}

export default App;