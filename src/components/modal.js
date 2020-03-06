import React, { Component } from 'react'
import Modal from "react-modal"
////////////////////////////////// Modal position/////////////////////////////////
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        borderRadius: "10px",
        transform: 'translate(-50%, -50%)',
    }
};

export class modal extends Component {
    constructor(props) {
        super(props)

        this.state = {
            show: true
        }
    }
    componentDidMount() {
        Modal.setAppElement(document.getElementById('root'))
    }
    render() {
        return (
            <div >
                <Modal
                    style={customStyles}
                    isOpen={this.props.show}
                    contentLabel="Example"
                    appElement={document.getElementById('root')}
                >
                    <div style={jss.modalContent}>
                        <span style={jss.text}>Do you want to replace the image?</span> <br />
                        <button onClick={this.props.done} style={jss.btn}>ok</button>
                        <button onClick={this.props.cancel} style={jss.btn}>cancel</button>
                    </div>
                </Modal>
            </div>
        )
    }
}
///////////////////////////////////styles for modal content/////////////////////
const jss = {
    modalContent: {
        height: 300,
        width: 300,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
    },
    btn: {
        backgroundColor: "#008CBA",
        width: "80%",
        height: "10%",
        alignSelf: "center",
        marginBottom: 10,
        color: "white",
        textDecoration: "none",
        fontSize: 20,
        border: "none"
    },
    text: {
        fontSize: 20,
    }
}

export default modal

