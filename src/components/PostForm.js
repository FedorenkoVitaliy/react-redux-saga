import React from "react";

export default class PostForm extends React.Component {
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
    const newPost = {
      title: title,
      id: Date.now().toString(),
    }
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
                className="btn btn-secondary"
        >
          Создать
        </button>
      </form>
    )
  }
}
