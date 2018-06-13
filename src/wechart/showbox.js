import React from 'react'

class Showbox extends React.Component {

    constructor(p) {
        super(p)
        this.state = {

        }
    }
    render() {
        return (<div className={this.props.cls}>
            {this.props.text.map((data) => {
                if (data.user == '我') {
                    return <div><div className='wcme' ><span>{data.text}</span><i>{data.user}</i></div></div>
                }
                else {
                    return <div><div className='wczhang'><i>{data.user}</i><span>{data.text}</span></div></div>
                }
            })}
        </div>)
    }
}

export default Showbox