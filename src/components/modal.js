import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import styles from "../assets/styles.module.css"
import Modal from "react-modal"
const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

export class modal extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             show:true
        }
    }
    
    render() {
        return (
            <div style={{height:"50%"}}>
                <Modal
                // className={styles.modal}
                style={{height:100,width:100}}
                isOpen={this.props.show}
                contentLabel="Example">
                    <text>Confirm?</text>
                    <button  onPress={this.props.done}>ok</button>
                    <button onPress={this.props.cancel}>cancel</button>
                    </Modal>                
            </div>
        )
    }
}

export default modal

