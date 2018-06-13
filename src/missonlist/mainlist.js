import React from 'react'

import { connect } from "react-redux";


import { changedo } from '../store/actions'

class Mainlist extends React.Component {

    render() {
        return (<div><ul>
            {this.props.missionlist.map((item) => {
                if (item.isdo == 1) {
                    return <li className='workdo'
                        key={item.id}
                        onClick={this.changdo.bind(this)}
                        id={item.id}
                    >{item.work}</li>
                } else {
                    return <li key={item.id} id={item.id} onClick={this.changdo.bind(this)} >{item.work}</li>
                }
            })}
        </ul></div>)
    }
    changdo(e) {
        this.props.dispatch(changedo(e.target.id))
    }
}

function filter(data) {

    if (data.changeseat == '全部') {
        return { missionlist: data.addmission }
    } else if (data.changeseat == '已完成') {
        return {
            missionlist: data.addmission.filter((item) => {
                return item.isdo == 1
            })
        }
    } else {
        return {
            missionlist: data.addmission.filter((item) => {
                return item.isdo == 0
            })
        }
    }
}

export default connect(filter)(Mainlist)