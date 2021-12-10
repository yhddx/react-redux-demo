import React, { Component } from 'react';
import { sendAction } from '../../action';
import store from '../../store';

class Home extends Component {
    handleClick = () => {
        const action = sendAction();
        store.dispatch(action);
    }
    // 当组件加载完毕，来监听
    componentDidMount(){
        store.subscribe(() => {
            console.log('subscribe:', store.getState());
            this.setState({})
        })
    }
    render() {
        return (
            <>
                <button onClick={this.handleClick}>点我点我，发送一个action</button>
                <div>{store.getState().value}</div>
            </>
        );
    }
}

export default Home;