import logo from './logo.svg';
import './App.css';

function App() {
  // return ( <>
  // 	//7
	//  <div>
	// 	<p class= 'a1'>text</p>
	// 	<p class= 'a2'>text</p>
	// 	<p class= 'a3'>text</p>
	// </div>;
	
	// //8
	// <ul>
	// <li>text1</li>
	// <li>text2</li>
	// <li>text3</li>
	// <li>text4</li>
	// <li>text5</li>
	// <li>text6</li>
	// <li>text7</li>
	// <li>text8</li>
	// <li>text9</li>
	// <li>text10</li>
	// </ul>

	// //9
	// <><ul>
	// 	<li>text1</li>
	// 	<li>text2</li>
	// 	<li>text3</li>
	// </ul>
	// <ul>
	// 	<li>text1</li>
	// 	<li>text2</li>
	// 	<li>text3</li>
	// </ul>;
	// </>

	// //11
	// <input />  );



	const str1 = 'text1';
	const str2 = 'text1';
  	const name = 'user';
	const age  = '30';
 	const arr = [1, 2, 3, 4, 5];
	const obj = {name: 'john', surname: 'smit'};
	const attr = 'block'

	const li1 = <li>text1</li>;
	const li2 = <li>text2</li>;
	const li3 = <li>text3</li>;

	const items = <><li>text1</li><li>text2</li><li>text3</li></>


  return (
    <>
    //12
    <input /><input /><input />

    //13
    <div>
        <p>{str1}</p>
        <p>{str2}</p>
      </div>;
    
    //14
    <div>
      name: {name}
      age:  {age}
	  </div>

    //15
    <ul>
      <li>{arr[0]}</li>
      <li>{arr[1]}</li>
      <li>{arr[2]}</li>
      <li>{arr[3]}</li>
      <li>{arr[4]}</li>
    </ul>;

    //16
    <p>
		name:    <span>{obj.name}</span>, 
		surname: <span>{obj.surnam}</span>
	</p>	

	//17

	<div id={attr}>
		text
	</div>;

	//19

	<ul>
		{li1}
		{li2}
		{li3}
	</ul>

	//20
	<ul>
		{items}
	</ul>

	//22
	<div>
		<input /> <br />
		<input /> <br />
		<input /> <br />
	</div>;



      </>
    )
}

export default App;
