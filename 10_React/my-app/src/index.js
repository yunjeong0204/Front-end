import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import JsxUse from './chaper3/3_4/JsxUse';
import Library from './chaper3/Library';
import Clock from './chaper4/Clock';
import PropsUse from './chapter5/5.3/PropsUse';
import Comment from './chapter5/Comment';
import CommentList from './chapter5/CommentList';
import NotificationList from './chapter6/NotificationList';
import Counter from './chapter7/7.2/Counter';
import SetStateMerge from './chapter7/7.2/SetStateMerge';
import CounterEffect from './chapter7/7.3/ex1/CounterEffect';
import EffectSummary from './chapter7/7.3/ex3/EffectSummary';
import EffectContainer from './chapter7/7.3/ex3/EffectContainer';
import Timer from './chapter7/7.3/ex4/Timer';
import TimerContainer from './chapter7/7.3/ex4/TimerContainer';
import Toggle from './chapter8/8.1/Toggle';
import Mybutton from './chapter8/8.2/Mybutton';
import ConfirmButton from './chapter8/ConfirmButton';
import Greeting from './chapter9/9.1/Greetinh';
import LoginControl from './chapter9/9.2/LoginControl';
import Mailbox from './chapter9/9.3/Mailbox';
import LoginControlRefactoring from './chapter9/9.3/LoginControlRefactoring';
import MainPage from './chapter9/9.4/MainPage';
import Landing from './chapter9/Landing';
import NumberList from './chapter10/10.1/NumberList';
import ListKey from './chapter10/10.2/ListKey';
import AttendanceBook from './chapter10/AttendanceBook';
import NameForm from './chapter11/11.2/NameForm';
import EssayForm from './chapter11/11.3/EssayForm';
import FlavorForm from './chapter11/11.3/FlavorForm';
import Textinputwithfocusbutton from './chapter7/7.6/Textinputwithfocusbutton';
import Fileinput from './chapter11/11.3/Fileinput';
import Componentvariable from './chapter7/7.6/Componentvariable';
import Reservation from './chapter11/11.4/Reservation';
import ReservationRefactoring from './chapter11/11.4/ReservationRefactoring';
import Signup from './chapter11/Signup';
import SignupRectoring from './chapter11/SignupRefactoring';
import UnitCounter from './chapter12/UnitCounter';
import UnitCalculator from './chapter12/UnitCalculator';
import WelcomeDialog from './chapter13/13.1.1.1/WelcomeDialog';
import SplitPaneSection from './chapter13/13.1.1.2/SplitPaneSection';
import Dialog from './chapter13/13.1.2/Dialog';
import DialogContainer from './chapter13/13.1.2/DialogContainer';
import SingUpDialog from './chapter13/13.1.3/SingUpDialog';
import Card from './chapter13/Card';
import ProfileCard from './chapter13/ProfileCard';
import DarkOrLight from './chapter14/DarkOrLight';
import StyledPage from './chapter15/StyledPage';
import ThemeApp from './chapter15/theme/ThemeApp';
import ParentComponent from './chapter7/7.5/ParentComponent';
import SimpleRouter from './chapter16/SimpleRouter';

const root = ReactDOM.createRoot(document.getElementById('root'));
// Root DOM Node에 렌더링 하도록 하는 함수
// 처음으로 렌더링할 컴포넌트를 지정하는데 App 컴포넌트가 기본적으로 들어가있음


// 9장 예제 Mailbox
const messages = ['React', 'Re:React', 'Re:Re: React'];


root.render(
  // <App />

  // 3장 예제
  // <JsxUse />
  // <Library />

  // 5장 예제
  // <PropsUse />
  // <CommentList />

  // 6장 예제
  // <NotificationList />
  
  // 7장 예제
  // <Counter />
  // <SetStateMerge />
  // <CounterEffect />
  // <EffectSummary />
  // <EffectContainer />
  // <Timer />
  // <TimerContainer />
  // <Textinputwithfocusbutton />
  // <Componentvariable />
  // <ParentComponent />

  // 8장 예제
  // <Toggle />
  // <Mybutton />
  // <ConfirmButton />

  // 9장 예제
  // <Greeting isLoggedIn={true}/> // {true} 로그인을 했다
  // <LoginControl />
  // <Mailbox unreadMessages={messages}/> // props 속성 넘기기
  // <LoginControlRefactoring />
  // <MainPage />
  // <Landing />

  // 10장 예제
  // <NumberList numbers={[1, 2, 3, 4, 5]}/>
  // <ListKey />
  // <AttendanceBook />

  // 11장 예제
  // <NameForm />
  // <EssayForm />
  // <FlavorForm />
  // <Fileinput />
  // <Reservation />
  // <ReservationRefactoring />
  // <Signup />
  // <SignupRectoring />

  // 12장 예제
  // <UnitCalculator />

  // 13장 예제
  // <WelcomeDialog />
  // <SplitPaneSection />
  // <DialogContainer />
  // <SingUpDialog />
  // <ProfileCard />

  // 14장 예제
  // <DarkOrLight />

  // 15장 예제
  // <StyledPage />
  // <ThemeApp />

  // 16장 예제
  <SimpleRouter />
);




// 4장 예제
// 1초마다 Clock 컴포넌트를 렌더링 하는 코드
// (참고로 실제 개발에서 이렇게 쓰는 경우는 없음)
// setInterval(() => {
//   root.render(
//     <Clock />
//   );
// }, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
