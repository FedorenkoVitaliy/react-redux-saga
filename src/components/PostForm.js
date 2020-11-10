import React from "react";
import { connect } from "react-redux";
import {createPost, showAlert} from "../redux/actions";
import {Alert} from "./alert";

class PostForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      title: ''
    }
  }

  changeInputHandler = (e) => {
    this.setState(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  submitHandler = (event) => {
    event.preventDefault();
    const { title } = this.state;
    if(!title.trim()){
      return this.props.showAlert('Post name can not be empty');
    }
    const newPost = {
      title: title,
      id: Date.now().toString(),
    }
    this.props.createPost(newPost);
    this.setState({title: ''});
  }

  render(){
    return(
      <form onSubmit={this.submitHandler}>
        {
          this.props.alert && <Alert text={this.props.alert}/>
        }
        <div className="form-group">
          <label htmlFor="title">Название поста</label>
          <input type="text"
                 className="form-control"
                 placeholder="Title"
                 id='title'
                 name='title'
                 value={this.state.title}
                 onChange={this.changeInputHandler}
          />
        </div>
        <button type={"submit"}
                className="btn btn-primary"
        >
          Создать
        </button>
      </form>
    )
  }
}

const mapStateToProps = state => ({ alert: state.app.alert });

export default connect(mapStateToProps, { createPost, showAlert })(PostForm);