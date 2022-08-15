import {Component} from 'react';
import User from './User';

import classes from './Users.module.css';

/*const DUMMY_USERS = [
	{id: 'u1', name: 'Max'},
	{id: 'u2', name: 'Manuel'},
	{id: 'u3', name: 'Julie'},
];*/

class Users extends Component {
	/*-class component 에서 state 를 정의할땐 constructor 을 사용
	* -class component 에서 state 는 object 형식임
	* -함수형 컴포넌트에서는 여러 상태 조각이있으면 useState 를 여러번 호출할수있다
	* --하나의 state object 를 만들어 그룹화 할수있지만 이건 함수형 컴포넌트에서만 가능한 선택사항임
	* ---class component 에서는 무조건적으로 컴포넌트를 구성하는 모든 상태를 하나의 객체로 만들어야함
	* */

	constructor(props) {
		/*js 에서 super 는 부모클래스 생성자의 참조임, 그리고 js 는 언어적 제약사항으로서 생성자에서 super 를 호출하기 전에는 this 를 사용할 수 없음*/
		super(props);
		this.state = {
			showUsers: true,
			more: 'Test',
		}
	}

	toggleUsersHandler() {
		/*새로운 상태를 갖는 객체 대신에 이 갱신 함수를 setState 에 전달합니다 만약 새로운 상태가 이전 상태에 의존한다면 그 역시 이런 방법을 사용*/
		this.setState((curState)=> {
			return {showUsers: !curState.showUsers}
		})
	}

	render() {
		const usersList = (
				<ul>
					{this.props.users.map((user) => (
							<User key={user.id} name={user.name}/>
					))}
				</ul>
		);
		return (
				<div className={classes.users}>
					<button onClick={this.toggleUsersHandler.bind(this)}> {/*메소드 내부의 this 예약어가 코드가 평가될 시점의 동일한 값이나 동일한 내용을 갖도록 설정됨,
					여기의 this 예약어는 이 클래스를 참조한다는 의미*/}
						{this.state.showUsers ? 'Hide' : 'Show'} Users
					</button>
					{this.state.showUsers && usersList}
				</div>
		);
	}
}
/*
const Users = () => {
	const [showUsers, setShowUsers] = useState(true);

	const toggleUsersHandler = () => {
		setShowUsers((curState) => !curState);
	};

	const usersList = (
			<ul>
				{DUMMY_USERS.map((user) => (
						<User key={user.id} name={user.name}/>
				))}
			</ul>
	);

	return (
			<div className={classes.users}>
				<button onClick={toggleUsersHandler}>
					{showUsers ? 'Hide' : 'Show'} Users
				</button>
				{showUsers && usersList}
			</div>
	);
};*/

export default Users;
