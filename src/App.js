import { useState } from 'react';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import LoginModal from './components/loginModal/LoginModal';
import SignUpModal from './components/signUpModal/SignUpModal';

function App() {
 const [profile, setProfile] = useState({});
 const [isOpen, setIsOpen] = useState(false);
 const [signUpModalIsOpen, setSignUpModalIsOpen] = useState(false);

 return (
  <div>
   <Header setIsOpen={setIsOpen} profile={profile} setProfile={setProfile} />
   <Footer author={'Luciano Polo'} />
   {isOpen && (
    <LoginModal
     setIsOpen={setIsOpen}
     setProfile={setProfile}
     setSignUpModalIsOpen={setSignUpModalIsOpen}
    />
   )}
   {signUpModalIsOpen && (
    <SignUpModal setSignUpModalIsOpen={setSignUpModalIsOpen} />
   )}
  </div>
 );
}

export default App;
