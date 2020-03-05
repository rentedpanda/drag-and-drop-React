import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import {arrayMove} from "react-sortable-hoc"
import ImageGrid from "./components/imageGrid"
import Modal from "./components/modal"
export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items : ['https://source.unsplash.com/PC_lbSSxCZE/800x600', 'https://source.unsplash.com/lVmR1YaBGG4/800x600', 'https://source.unsplash.com/5KvPQc1Uklk/800x600', 'https://source.unsplash.com/GtYFwFrFbMA/800x600', 'https://source.unsplash.com/Igct8iZucFI/800x600', 'https://source.unsplash.com/M01DfkOqz7I/800x600', 'https://source.unsplash.com/MoI_cHNcSK8/800x600', 'https://source.unsplash.com/M0WbGFRTXqU/800x600', 'https://source.unsplash.com/s48nn4NtlZ4/800x600', 'https://source.unsplash.com/E4944K_4SvI/800x600', 'https://source.unsplash.com/F5Dxy9i8bxc/800x600', 'https://source.unsplash.com/iPum7Ket2jo/800x600'
    ],
    show:false,
    ok:false,
    cancel:false
    }
  }
  render() {
    let onSortEnd = ({oldIndex, newIndex}) => {
      // this.setState({show:true})
      this.setState(({items}) => ({
        items: arrayMove(items, oldIndex, newIndex),
      }))
    };
    let handleOk=() =>{
      this.setState({ok:true,cancel:false,show:false})
    }
    let handleCancel=() =>{
      this.setState({ok:false,cancel:true,show:false})
    }
    return (
      <div>
        <Modal show={this.state.show} done={handleOk} cancel={handleCancel}/>
        <ImageGrid items={this.state.items} axis="xy" onSortEnd={onSortEnd}/>  
      </div>
    )
  }
}
export default App
