class IndecisionApp extends React.Component {
  constructor(props) {
    super();
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handeleDeleteOption = this.handeleDeleteOption.bind(this);
    this.state = {
      options: []
    }
  }
  componentDidMount(){
    try {
      const json = localStorage.getItem('options')
      const options = JSON.parse(json)

      if (options) {
        this.setState(() => ({ options }))
      }
    } catch (e) {
      // Do nothing at all
    }
  }
  componentDidUpdate(prevProps, prevState){
    if(prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options)
      localStorage.setItem('options', json);
    }
  }
  componentWillUnmount(){
    console.log('Component will unmount!')
  }
  handleDeleteOptions(){
    this.setState(() => ({ options: [] }))
  }
  handeleDeleteOption(optionToRemove){
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }))
  }
  handlePick(){
    const randomNum = Math.floor(Math.random()*this.state.options.length);
    const option = this.state.options[randomNum];
    alert(`You should: ${option}`)
  }
  handleAddOption(option){
    if(!option){
      return 'Enter valid value to add item'
    }else if(this.state.options.indexOf(option) > -1){
      return 'This option already exists'
    }
    this.setState((prevState) => ({ options: prevState.options.concat(option) }))
  }
  render() {
    const subtitle = "Put your life in the hands of a computer";
    return (
      <div>
      <Header subtitle={subtitle} />
      <Action
        hasOptions={this.state.options.length > 0}
        handlePick={this.handlePick}
      />
      <Options
        options={this.state.options}
        handleDeleteOptions={this.handleDeleteOptions}
        handeleDeleteOption={this.handeleDeleteOption}
      />
      <AddOption handleAddOption={this.handleAddOption} />
      </div>
    )
  }
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
}

Header.defaultProps = {
  title: 'Indecision'
}

const Action = (props) => {
  return (
    <div>
      <button
        onClick={props.handlePick}
        disabled={!props.hasOptions}
      >
        What should i do?
      </button>
    </div>
  );
}

const Options = (props) => {
  return (
    <div>
      {
        props.options.map((option) => (
          <Option
            key={option}
            optionText={option}
            handeleDeleteOption={props.handeleDeleteOption}
          />
        ))
      }
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {props.options.length === 0 && <p>Please add an option to get started!</p>}
    </div>
  );
}

const Option = (props) => {
  return(
    <div>
      <p>{props.optionText}</p>
      <button
        onClick={(e) => {
          props.handeleDeleteOption(props.optionText);
        }}
      >
        remove
      </button>
    </div>
  )
}

class AddOption extends React.Component {
  constructor(props){
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this)
    this.state = {
      error: undefined
    }
  }
  handleAddOption(e){
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => ({ error }));

    if (!error) {
      e.target.elements.option.value = '';
    }
  }
  render() {
    return(
      <div>
      {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    )
  }
}

// const User = (props) => {
//   return (
//     <div>
//       <p>Name: {props.name}</p>
//       <p>Age: {props.age}</p>
//     </div>
//   )
// };

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
