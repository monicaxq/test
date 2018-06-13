import React from 'react'

class Waitlist extends React.Component {

    render() {
        let wlist = this.props.list
        return (<div className={this.props.cls}>
            {wlist.map((item, index) => {
                return <div className='flistbox' key={index}>
                    <img src='./header.jpg' />
                    <span>{item.name} 请求加你好友</span>
                    <button onClick={this.accept.bind(this, item.id)} >接受</button>
                    <button onClick={this.refuse.bind(this, item.id)}>拒绝</button>
                </div>
            })}
        </div>)
    }


    accept(id) {
        this.props.acceptBtn(id)
    }

    refuse(id) {
        this.props.refusetBtn(id)
    }


}

export default Waitlist