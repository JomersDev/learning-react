import logo from './React-icon.png';
import {style} from './style.css'

function Header() {
  return (
    <header>
      <nav className='nav-main'>
          <img src={logo} alt="react logo" className='react-logo'/>
          <ul className='nav-items'>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
      </nav>
    </header>
  )
}

function MainContent() {
  return (
    <div className='main-content'>
      <h1>Reasons I'm excited to learn react</h1>
      <ol>
        <li>Hireable skill</li>
        <li>In demand skill</li>
        <li>Interesting learning how websites are built</li>
      </ol>
    </div>
  )
}

function Footer() {
  return (
    <footer>@ 2022 McGrory development. All rights reserved</footer>
  )
}

function Page() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>

  );
}

export default Page;