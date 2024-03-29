import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Qualification from './components/qualification/Qualification';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';
import Portfolio from './components/projects/Portfolio';
import CustomCursor from './components/cursor/Cursor';
import Theme from './components/theme/darklight';


const App = () => {
  return (
    <>
    <div>
      {/* Other components */}
      
      <CustomCursor />
    </div>
      <Header/>
      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
      <Theme/>
    </>
  );
}

export default App;
 