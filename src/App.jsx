import { lazy, Suspense } from 'react';
import './App.css';

// Lazy load all sections
const Hero = lazy(() => import('./sections/Hero'));
const AboutMe = lazy(() => import('./sections/About'));
const Skills = lazy(() => import('./sections/Skills'));
const Project = lazy(() => import('./sections/Project'));
const Contact = lazy(() => import('./sections/Contact'));

// Loading fallback component
const LoadingFallback = () => (
  <div className="flex items-center justify-center py-20">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
  </div>
);

function App() {
  return (
    <main className="min-h-screen">
      <Suspense fallback={<LoadingFallback />}>
        <Hero />
      </Suspense >
      <Suspense fallback={<LoadingFallback />}>
        <AboutMe />
      </Suspense>
        <Suspense fallback={<LoadingFallback />}>
        <Skills />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
        <Project />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
        <Contact />
        </Suspense>
    </main>
  );
}

export default App;