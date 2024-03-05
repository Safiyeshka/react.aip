import logo from './logo.svg';
import './App.css';

//function App() {
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



// 	const str1 = 'text1';
// 	const str2 = 'text1';
//   	const name1 = 'user';
// 	const age  = '30';
//  	const arr = [1, 2, 3, 4, 5];
// 	const obj = {name: 'john', surname: 'smit'};
// 	const attr = 'block'

// 	const li1 = <li>text1</li>;
// 	const li2 = <li>text2</li>;
// 	const li3 = <li>text3</li>;

// 	const items = <><li>text1</li><li>text2</li><li>text3</li></>

//   return (
//     <>
//     //12
//     <input /><input /><input />

//     //13
//     <div>
//         <p>{str1}</p>
//         <p>{str2}</p>
//       </div>;
    
//     //14
//     <div>
//       name: {name1}<br />
//       age:  {age}
// 	  </div>

//     //15
//     <ul>
//       <li>{arr[0]}</li>
//       <li>{arr[1]}</li>
//       <li>{arr[2]}</li>
//       <li>{arr[3]}</li>
//       <li>{arr[4]}</li>
//     </ul>;

//     //16
//     <p>
// 		name:    <span>{obj.name}</span>, 
// 		surname: <span>{obj.surname}</span>
// 	</p>	

// 	//17

// 	<div id={attr}>
// 		text
// 	</div>;

// 	//19

// 	<ul>
// 		{li1}
// 		{li2}
// 		{li3}
// 	</ul>

// 	//20
// 	<ul>
// 		{items}
// 	</ul>

// 	//22
// 	<div>
// 		<input /> <br />
// 		<input /> <br />
// 		<input /> <br />
// 	</div>;


// 	const num1 = 3;
// 	const num2 = 2;
// 	const name = 'john';
// 	const surname = 'smit';	
// 	const num = 4;


//   const isAdult = true;
//   let text;

//   if (isAdult) {
//     text = <p>Содержимое для взрослых</p>;
//   } else {
//     text = <p>Содержимое для несовершеннолетних</p>;
//   }




// 	return (<>
	
// 	//23.1
// 	<div>
// 	<li>text1</li>
// 	<li>text2</li>
// 	<li>text3</li>
// 	<li>text4</li>
// 	<li>text5</li>
// 	<li>text6</li>
// 	<li>text7</li>
// 	<li>text8</li>
// 	<li>text9</li>
// 	<li>text10</li>
// 	</div>;


// 	//23.2
// 	<div>
// 	<tbody>
// 		<tr>
// 			<td>t1</td>
// 			<td>t1</td>
// 			<td>t1</td>
// 		</tr>
// 		<tr>
// 			<td>t2</td>
// 			<td>t2</td>
// 			<td>t2</td>
// 		</tr>	
// 		<tr>
// 			<td>t3</td>
// 			<td>t3</td>
// 			<td>t3</td>
// 		</tr>
// 	</tbody>
// 	</div>

// 	//24.1	
// 	<div>
// 		result: {num1 ** num2}
// 	</div>;

// 	//24.2
// 	<div>
// 		result: {name + ' ' + surname}
// 	</div>;

// 	//24.3
// 	<div>
// 		result: {Math.sqrt(num)}
// 	</div>;

// 	//26

//     <div>
//       {text}
//     </div> </>)

	//27
	function App() {

	const isAdmin = true;
	let content = null;
  
	if (isAdmin) {
	  content = (
		<div>
		  <p>Абзац 1</p>
		  <p>Абзац 2</p>
		</div>
	  );
	}

	return content;
	}

	//28
	function App() {
		const age = 19;
	  
		return (
		  <div>
			{age > 18 ? <p>Содержимое для взрослых</p> : <p>Содержимое для несовершеннолетних</p>}
		  </div>
		);
	  }

	//29

	function App() {
	const isAuth = true;

	return (
		<div>
		{isAuth && <p>Вы авторизованы</p>}
		</div>
	);
	}

	//30

	function App() {
	const isAuth = false;

	return (
		<div>
		{!isAuth && <p>Пожалуйста, авторизуйтесь</p>}
		</div>
	);
	}


	//31
	function App() {
	function square(num) {
		return num ** 2;
	}

	function cube(num) {
		return num ** 3;
	}

	function getDigitsSum(number) {
		let sum = 0;
		const digits = number.toString().split("");

		for (let digit of digits) {
		sum += parseInt(digit);
		}

		return sum;
	}

	const sum = square(3) + cube(4);
	const digitsSum = getDigitsSum(123);

	return (
		<div>
		{sum}
		<br />
		{digitsSum}
		</div>
	);
	}

	//32

	function App() {
	function square(num) {
		return num ** 2;
	}

	function cube(num) {
		return num ** 3;
	}

	function getDigitsSum(number) {
		let sum = 0;
		const digits = number.toString().split("");

		for (let digit of digits) {
		sum += parseInt(digit);
		}

		return sum;
	}

	return (
		<div>
		{square(3) + cube(4)}
		<p>{getDigitsSum(12345)}</p>
		</div>
	);
	}

	//33
	function App() {
		function show1() {
		  alert(1);
		}
	  
		function show2() {
		  alert(2);
		}
	  
		return (
		  <div>
			<button onClick={show1}>act1</button>
			<button onClick={show2}>act2</button>
		  </div>
		);
	  }

	  //34

	  function App() {
		function showAlert(number) {
		  alert(number);
		}
	  
		return (
		  <div>
			<button onClick={() => showAlert(1)}>act1</button>
			<button onClick={() => showAlert(2)}>act2</button>
			<button onClick={() => showAlert(3)}>act3</button>
		  </div>
		);
	  }

	  //35.1
	  function App() {
		function handleClick(event) {
		  console.log(event);
		}
	  
		return (
		  <div>
			<button onClick={handleClick}>Click me</button>
		  </div>
		);
	  }
	  

	  //35.2
	  function App() {
		function handleClick(event) {
		  console.log(event.target);
		}
	  
		return (
		  <div>
			<button onClick={handleClick}>Click me</button>
		  </div>
		);
	  }

	  //36.2
	  function App() {
		function func(arg1, arg2) {
		  console.log(arg1, arg2);
		}
	  
		return (
		  <div>
			<button onClick={() => func('eee', 'event')}>act</button>
		  </div>
		);
	  }

	  //36.3
	  function App() {
		function func(event, arg) {
		  console.log(event, arg);
		}
	  
		return (
		  <div>
			<button onClick={event => func(event, 'eee')}>act</button>
		  </div>
		);
	  }

	  //36.4
	  function App() {
		function func(arg1, event, arg2) {
		  console.log(arg1, event, arg2);
		}
	  
		return (
		  <div>
			<button onClick={event => func('arg1', event, 'arg2')}>act</button>
		  </div>
		);
	  }

	  //37
	function App() {
	const arr = [
		<li>1</li>,
		<li>2</li>,
		<li>3</li>,
		<li>4</li>,
		<li>5</li>,
	];

	return (
		<ul>
		{arr}
		</ul>
	);
	}

	//38
	function App() {
		const arr = [];
	
		for (let i = 1; i <= 5; i++) {
		arr.push(<li>{i}</li>);
		}
	
		return (
		<ul>
			{arr}
		</ul>
		);
	}
	
	//39
	function App() {
		const arr = ['a', 'b', 'c', 'd', 'e'];
	  
		const res = arr.map(function(item) {
		  return <li>{item}</li>;
		});
	  
		return (
		  <ul>
			{res}
		  </ul>
		);
	  }

	//40
	function App() {
		const arr = [1, 2, 3, 4, 5];
	  
		const res = arr.map(function(item, index) {
		  return <p key={index}>{item}</p>;
		});
	  
		return (
		  <div>
			{res}
		  </div>
		);
	  }

	//41
	function App() {
		const users = [
		  { name: 'user1', surn: 'surn1', age: 30 },
		  { name: 'user2', surn: 'surn2', age: 31 },
		  { name: 'user3', surn: 'surn3', age: 32 },
		];
	  
		const res = users.map(function(item, index) {
		  return (
			<li key={index}>
			  <span>{item.name}</span>:
			  <span>{item.surn}</span>,
			  <span>{item.age}</span>
			</li>
		  );
		});
	  
		return (
		  <ul>
			{res}
		  </ul>
		);
	  }

	  //42
		
	function App() {
		const prods = [
		{ id: 1, name: 'product1', cost: 10 },
		{ id: 2, name: 'product2', cost: 20 },
		{ id: 3, name: 'product3', cost: 30 },
		];
	
		const res = prods.map(function(item) {
		return (
			<p key={item.id}>
			<span>{item.name}</span>:
			<span>{item.cost}</span>
			</p>
		);
		});
	
		return (
		<div>
			{res}
		</div>
		);
	}

	//43
	function App() {
		const users = [
		  { id: 1, name: 'user1', surn: 'surn1', age: 30 },
		  { id: 2, name: 'user2', surn: 'surn2', age: 31 },
		  { id: 3, name: 'user3', surn: 'surn3', age: 32 },
		];
	  
		const rows = users.map(function(item) {
		  return (
			<tr key={item.id}>
			  <td>{item.name}</td>
			  <td>{item.surn}</td>
			  <td>{item.age}</td>
			</tr>
		  );
		});
	  
		return (
		  <table>
			<thead>
			  <tr>
				<th>Имя</th>
				<th>Фамилия</th>
				<th>Возраст</th>
			  </tr>
			</thead>
			<tbody>
			  {rows}
			</tbody>
		  </table>
		);
	  }

	




//      </>   ) }

export default App;