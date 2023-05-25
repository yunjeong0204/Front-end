import React from "react";
import Notification from "./Notification";

const resercedNotifications = [
  {
    id:1,
    message: '안녕하세요, 오늘 일정을 알려드립니다.'
  },
  {
    id:2,
    message: '내일 일정을 알려드립니다.'
  },
  {
    id:3,
    message: '점심시간입니다'
  },

];
let timer;

class NotificationList extends React.Component{
  constructor(props) {
    super(props);

    this.state={
      notifications:[] //state에 notifications라는 이름으로 초기값은 빈 배열
    };
  }

  // 컴포넌트가 생성될 때 호출되는 메소드
  componentDidMount() {
    const {notifications} = this.state; //객체구조분해할당
    timer = setInterval(() => {
      if (notifications.length < resercedNotifications.length) { //3개보다 작은 경우에
        const index = notifications.length; 
        notifications.push(resercedNotifications[index]);//notifications 배열에 추가
        this.setState({
          // notifications: notifications
          notifications //ES6차 문법, 위에랑 같음, 생략가능해서 쓸 수 있음
        });
      } else {
        // 추가 실습2: 언마운트 시키기 위해 작성
        // this.setState({
        //   notifications: []
        // });
        clearInterval(timer);
      }
    }, 1000);

  }

  render() {
    return(
      <div>
        {this.state.notifications.map((noti) => {
          return(
            <Notification 
              key={noti.id}
              id={noti.id}
              message={noti.message}
              />
          );
        })}
      </div>
    );
  }
}

export default NotificationList;
