import logo from './React-icon.png';

function Header() {
  return (
    <header>
      <nav>
        <img src={logo} alt="react logo" width="40px" height="auto"/>
      </nav>
    </header>
  )
}

function MainContent() {
  return (
    <>
      <h1>Reasons I;m excited to learn react</h1>
      <ol>
        <li>Hireable skill</li>
        <li>In demand skill</li>
        <li>Interesting learning how websites are built</li>
      </ol>
    </>
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