import React from 'react'

class Friendlist extends React.Component {

    render() {
        let flist = this.props.list
        return (<div className='friendlist'>
            <ul>
                {flist.map((item, index) => {
                    return <li key={index}>{item}</li>
                })}
            </ul>
        </div>)
    }

}

export default Friendlist