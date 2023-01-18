
import './App.css';
import Head from './components/common/header.jsx';
import Home from './components/pages/landing-page/home.jsx';
import Layout from './components/pages/landing-page/layout';
import Section from './components/pages/landing-page/section';
import About from './components/pages/landing-page/about';
import Cate from './components/pages/landing-page/category';
import Service from './components/pages/landing-page/service';
import Contact from './components/pages/landing-page/contact';
import Visit from './components/pages/landing-page/visit';
import Footer from './components/common/footer';


function App() {
  return (
    <>
      <Head />
      <Home />
      <Section />
      <Layout />
      <About />
      <Cate />
      <Service />
      <Contact/>
      <Visit/>
      <Footer/>



    </>
  )
}

export default App;
