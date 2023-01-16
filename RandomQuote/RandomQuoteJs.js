class ShowQuote extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <blockquote>
          <p id='text'>{this.props.currentQuote.q}</p>
          <p id='author'>- {this.props.currentQuote.a}</p>
        </blockquote>
      </div>
    );
  }
}

class ShowButton extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    const tweetURL='https://twitter.com/intent/tweet?hashtags=quotes&text="'+this.props.currQuote.q+'" -'+this.props.currQuote.a;
    
    return(
      <div className='button-list'>
        <a className='button' id='tweet-quote' target="_top" href={tweetURL}><i className='fa-brands fa-twitter'></i></a>
        <a className="button" id="new-quote" href="#" onClick={this.props.newQuote}>New quote</a>
      </div>
    );
  }
}

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      quoteList: [
        {q: 'Hesitation is defeat.', a: 'Isshin Ashina'},
        {q: 'Roses are red, violets are blue. I have to go to the bathroom.', a: 'Patrick Star'},
        {q: 'The best revenge is massive success.', a: 'Frank Sinatra'},
        {q: 'It does not matter how slowly you go as long as you do not stop.', a: 'Confucius'},
        {q: 'The mind is everything. What you think you become.', a: 'Buddha'},
        {q: 'If you can dream it, you can achieve it.', a: 'Zig Ziglar'},
        {q: 'Strive not to be a success, but rather to be of value.', a: 'Albert Einstein'}
      ],
      currentQuote: {q: '', a: ''}
    };
    this.newQuote = this.newQuote.bind(this);
  }
  newQuote(){
    let rand = Math.floor(Math.random() * this.state.quoteList.length);
    while(this.state.quoteList[rand].q == this.state.currentQuote.q){
      rand = Math.floor(Math.random() * this.state.quoteList.length);
    }
    this.setState({
      currentQuote: {
        q: this.state.quoteList[rand].q,
        a: this.state.quoteList[rand].a
    }
    });
  }
  render(){
    if(this.state.currentQuote.q==''){this.newQuote();}
    return(
      <div>
        <ShowQuote currentQuote={this.state.currentQuote}/>
        <ShowButton newQuote={this.newQuote} currQuote={this.state.currentQuote}/>
      </div>
    );
  }
}

ReactDOM.createRoot(document.getElementById('quote-box')).render(<App/>); //-> React18

// ReactDOM.render(<App />, document.getElementById('quote-box'));  //-> React17