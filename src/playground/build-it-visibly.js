console.log('App.js is running');

class VisibilityToggle extends React.Component{
  constructor(props){
    super(props);
    this.toggleTekst = this.toggleTekst.bind(this)
    this.state = {
      visibility: false
    }
    this.title = 'Visibility toggle';
  }
  toggleTekst(){
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      }
    })
  }
  render(){
    return (
      <div>
        <h1>{this.title}</h1>
        <button onClick={this.toggleTekst}>{this.state.visibility ? 'show tekst' : 'hide tekst'}</button>
        {this.state.visibility && <p>Toggle this shit</p>}
      </div>
    )
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))
