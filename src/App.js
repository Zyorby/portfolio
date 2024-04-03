import './App.css';
import { DiHtml5, DiCss3, DiJsBadge, DiMysql, DiPython } from "react-icons/di";
import { RxLinkedinLogo ,RxGithubLogo } from "react-icons/rx";
import pfp from './main-pfp.jpg';

function App() {
  return (
    <div className="flex flex-col">

      <nav className="fixed top-1 w-screen flex flex-row max-h-32 text-black text-xl font-mono">
        <h1 className="mr-auto ml-10">Agic.dev</h1>
        <i>Home</i>
        <i className="ml-5">About</i>
        <i className="ml-5">Projects</i>
        <i className="mr-10 ml-5">Contact</i>
      </nav>

      <main className="flex flex-col mt-96 ml-96 text-black text-lg h-96">
        <h1 className="font-mono text-3xl">Aspiring Cybersecurity Analyst</h1>
        <p className="pt-3">Hi, I'm Almedin Agic. A passionate Future CyberSecurity student based out of Michigan</p>
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
      

      <about className="">
        
      </about>

    </div>
  );
}

export default App;
