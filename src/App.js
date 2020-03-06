import React, { Component } from 'react'
import './App.css';
import ImageGrid from "./components/imageGrid"
import Modal from "./components/modal"
const arrayMove = require('array-move')
export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: ['https://source.unsplash.com/PC_lbSSxCZE/800x600',
        'https://source.unsplash.com/lVmR1YaBGG4/800x600',
        'https://source.unsplash.com/5KvPQc1Uklk/800x600',
        'https://source.unsplash.com/GtYFwFrFbMA/800x600',
        'https://source.unsplash.com/Igct8iZucFI/800x600',
        'https://source.unsplash.com/M01DfkOqz7I/800x600',
        'https://source.unsplash.com/MoI_cHNcSK8/800x600',
        'https://source.unsplash.com/M0WbGFRTXqU/800x600',
        'https://source.unsplash.com/s48nn4NtlZ4/800x600',
        'https://source.unsplash.com/E4944K_4SvI/800x600',
        'https://source.unsplash.com/F5Dxy9i8bxc/800x600',
        'https://source.unsplash.com/iPum7Ket2jo/800x600'
      ],
      show: false,
      oldIndex: "",
      newIndex: "",
    }
  }
  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState({ show: true, oldIndex: oldIndex, newIndex: newIndex })
  };
  handleOk = () => {
    this.setState({ show: false })
    this.setState(({ items }) => ({
      items: arrayMove(items, this.state.oldIndex, this.state.newIndex),
    }));
  }
  handleCancel = () => {
    this.setState({ show: false })
  }

  render() {
    return (
      <div>
        <Modal show={this.state.show} done={this.handleOk} cancel={this.handleCancel} />
        <ImageGrid items={this.state.items} axis="xy" onSortEnd={this.onSortEnd} />
      </div>
    )
  }
}
export default App
