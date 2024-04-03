import './App.css';
import { DiHtml5, DiCss3, DiJsBadge, DiMysql, DiPython } from "react-icons/di";
import { RxLinkedinLogo ,RxGithubLogo } from "react-icons/rx";
import pfp from './main-pfp.jpg';
import study from './study.jpg';
import gif from './cool.gif';

function App() {
  return (
    <div className="flex flex-col">

      <nav className="fixed top-1 w-screen flex flex-row max-h-32 text-black text-xl font-mono">
        <h1 className="mr-auto ml-10">Agic.dev</h1>
        <i>Home</i>
        <a className="ml-5" href="#about">About</a>
        <i className="ml-5">Projects</i>
        <i className="mr-10 ml-5">Contact</i>
      </nav>

      <main className="flex flex-col mt-96 ml-96 text-black text-lg h-96">
        <h1 className="font-mono text-3xl">Aspiring Cybersecurity Analyst</h1>
        <p className="pt-3">Hi, I'm Almedin Agic. A passionate Future CyberSecurity expert based out of Michigan</p>
        <div className="text-3xl flex flex-row mt-5">
          <i className="pr-2"><RxLinkedinLogo /></i>
          <i><RxGithubLogo /></i>
        </div>
        <div className="flex flex-row pt-10">
          <h3 className="flex flex-row text-2xl text-center">Tech Stack |  </h3>
          <div className="flex flex-row text-3xl pt-1">
            <i className='pr-2'><DiHtml5/> </i>
            <i className='pr-2'><DiCss3/> </i>
            <i className='pr-2'><DiJsBadge/> </i>
            <i className='pr-2'><DiMysql /> </i>
            <i><DiPython /> </i>
          </div>
        </div>
        <img src={pfp} alt='pfp' width="400px" height="400px" className="rounded-full absolute right-96 top-0 mt-80"></img>
      </main>
      

      <about className="flex flex-row ml-auto mr-auto mt-72 font-mono">
        <img src={study} alt="study" width="300px" height="300px" className="rounded-2xl mr-10 h-64"></img>
        <img src={gif} alt="gif" width="80px" height="100px" className="absolute rounded-full -bottom-96 left-1/3 ml-28"></img>
        <div className="flex flex-col mt-10">
          <h2 className="text-blue-600 font-bold text-lg pb-2" id="about">About Me</h2>
          <h2 className="font-bold text-lg pb-2">A passionate future CyberSecurity expert <br></br> based out of michigan</h2>
          <p className="mb-96">lorem ipsum blah blah blah....alsdiopjhabsdpiyubasasklj<br></br>
          ashdflaksjdfhasdasdadsasdasdadsasdakjhsadgfalkshfg<br></br>
          a;sdokiufjhaspodfilkuhabsfdlkhbyaposidhfbasodifkyhba
          </p>
        </div>
      </about>

    </div>
  );
}

export default App;
