import {Fragment, Component} from 'react';
import classes from './UserFinder.module.css'
import Users from './Users';
import UsersContext from '../store/users-context'

/*const DUMMY_USERS = [
	{id: 'u1', name: 'Max'},
	{id: 'u2', name: 'Manuel'},
	{id: 'u3', name: 'Julie'},
];*/

class UserFinder extends Component {
	/*리액트에게 이 컴포넌트는 UsersContext 라는 컨텍스트에 접근할 수 있다고 전달하는 것
	* -static contextType 는 단 한 번만 설정할 수 있으므로, 동시에 연결해야 하는 2개의 컨텍스트가 있다면 이 것이 아닌 다른 방법을 찾아봐야 함*/
	static contextType = UsersContext

	constructor(props) {
		super(props)
		this.state = {
			filteredUsers: [],
			searchTerm: '',
		}
	}

	/*컴포넌트가 처음 렌더링 될때만 실행
	* -HTTP 요청을 보내고 다룰 수 있음*/
	componentDidMount() {
		/*SERVER 에서 가져온 유저들 정보 설정*/
		this.setState({
			filteredUsers: this.context.users, /*위에서 contextType 를 UsersContext 로 지정해줬기에 this.context.users 로 users-context 에 접근해 users 에 연결함*/
		})
	}

	/*리액트에 의해 state 변화로 인해 컴포넌트가 재평가되게 되면 자동적으로 호출*/
	componentDidUpdate(prevProps,prevState) {
		/*setState 를 호출하여 갱신되는 filteredUsers 가 바뀌었다면, componentDidUpdate() 메소드는	재실행됩니다만, 이 if 구문은 실행되지 않음
		따라서 상태 갱신이 이루어지지 않으니무한 루프 역시 발생하지 않음
		-함수형 컴포넌트는 의존성 배열을 명시 해주므로 아래와 같이 조건문을 넣어줄 필요가 없다*/
		if(prevState.searchTerm !== this.state.searchTerm){ /*이전 상태와 현재 상태가 달라지면 실행*/
		this.setState({filteredUsers: this.context.users.filter((user) => user.name.includes(this.state.searchTerm))})
		}
	}

	searchChangeHandler = (event) => {
		this.setState({
			searchTerm: event.target.value, /*사용자 입력 값을 읽어들임*/
		})
	}

	render() {
		return (
				<Fragment>
					<div className={classes.finder}>
						<input type='search' onChange={this.searchChangeHandler.bind(this)}/>
					</div>
					<Users users={this.state.filteredUsers}/>
				</Fragment>
		)
	}
}

export default UserFinder;

/* 함수형 컴포넌트
const UserFinder = () => {
	const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
	const [searchTerm, setSearchTerm] = useState('');

	useEffect(() => {
		setFilteredUsers(
				DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
		);
	}, [searchTerm]);

	const searchChangeHandler = (event) => {
		setSearchTerm(event.target.value);
	};

	return (
			<Fragment>
				<div className={classes.finder}>
					<input type='search' onChange={searchChangeHandler}/>
				</div>
				<Users users={filteredUsers}/>
			</Fragment>
	);
};

export default UserFinder;*/
