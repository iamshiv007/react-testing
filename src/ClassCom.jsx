import React, { Component } from 'react'

export default class ClassCom extends Component {
    getUserList(a , b) {
        return a + b
    }
    render() {
        return (
            <div>This is class based component</div>
        )
    }
}
