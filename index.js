// We can create react element two ways 1 is React.createElement and another way is JSX
//JSX is we write html like structure inside javascript and it will convert to react way
//React follows camecase where as in JS we are not using camel case
// const div = React.createElement('div',  {}, 'Hello Rajya i am inside reactNow');

// const root = ReactDom.createRoot(document.getElementById('root'));
// root.render(div);

const child1 = React.createElement('p', {}, "I am a child2")
const child2 = React.createElement('p', {}, "I am a child2")
const div = React.createElement('div', {className: 'text'}, [child1, child2])
// const div = <div className="text">hello 2</div>
// console.log(div)
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(div)