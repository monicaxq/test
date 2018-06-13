import React from 'react'

import { connect } from "react-redux";


import { filter } from '../store/actions'

class Control extends React.Component {

    render() {

        return (<div onClick={this.fliterBtn.bind(this)}><button>全部</button><button>已完成</button><button>未完成</button></div>)

    }

    fliterBtn(e) {
        if (e.target.nodeName == 'BUTTON') {
            this.props.dispatch(filter(e.target.innerHTML))
        }
    }

}

export default connect()(Control)