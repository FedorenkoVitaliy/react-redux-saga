import React from "react";
import { connect } from "react-redux";
import {createPost} from "../redux/actions";

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
      return;
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

export default connect(null, { createPost })(PostForm);