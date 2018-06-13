import React from 'react'
import Inputbox from './inputbox'
import Mainlist from './mainlist'
import Control from './control'

class Listbox extends React.Component {

    render() {

        return (<div><Inputbox />
            <Mainlist />
            <Control /></div>)

    }


}

export default Listbox