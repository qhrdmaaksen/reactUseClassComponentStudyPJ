import {Component} from 'react';

class ErrorBoundary extends Component {
	constructor(props){
		super(props)
		this.state=({
			hasError: false,
		})
	}

	/*어느 클래스 컴포넌트에도 추가할 수 있으며 컴포넌트에 이를 추가하게 되면 클래스 컴포넌트를 오류 경계로 만들게 됨,이 ‘오류 경계’란 단어는
이런 생명 주기 메소드를 갖는 컴포넌트를 지칭하는 용어임,2개의 함수형 컴포넌트를 편집할 수 없음
-오류 경계를 빌드하려면 클래스 컴포넌트여야 하고 동시에 생명 주기 메소드를 갖는 컴포넌트여야 함
-생명 주기 메소드는 하위 컴포넌트 중 하나가 오류를 만들거나 전달할 때 발동
-오류 경계는 class component 에서만 사용가능하며 아직 함수형 component 에서는 사용 불가*/
	componentDidCatch(error, errorInfo) {
		console.log('componentDidCatch Error ::: ', error, errorInfo) /*분석을 위해서 서버로 전송작업*/
		this.setState({
			hasError: true,
		})
	}

	render(){
		if (this.state.hasError){
			return <p>무언가 잘못되었음 에러 발생</p>
		}
		return this.props.children /*오류 경계 컴포넌트를 보호하려고하는 컴포넌트로 둘러싸아야하기때문,*/
	}
}

export default ErrorBoundary ;