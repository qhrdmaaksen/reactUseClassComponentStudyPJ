import {Component} from 'react'
import classes from './User.module.css';

/*class 예약어 클래스이름 클래스 정의 내용이있는 중괄호*/
class User extends Component {

  /*render method 는 리액트에 필요한 특정 메소드로 리액트가 jsx 코드 안에 컴포넌트가 사용된것을 확인하면 호출하는 메소드*/
  render (){
    return (
        <li className={classes.user}>{this.props.name}</li> /*this 예약어를 가지고 props 에 접근*/
    )
  }
}

export default User;

/*const User = (props) => {
  return <li className={classes.user}>{props.name}</li>;
};

export default User;*/
