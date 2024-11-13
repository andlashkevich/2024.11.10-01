import styles from './App.module.css';
import { useState } from 'react';

function App() {
	const [op1, setOp1] = useState('');
	const [op, setOp] = useState('');
	const [op2, setOp2] = useState('');
	const [display, setDisplay] = useState(0);
	const [pass, setPass] = useState(false);
	const ar = [
		{ bt: 'digit', value: '7' },
		{ bt: 'digit', value: '8' },
		{ bt: 'digit', value: '9' },
		{ bt: 'math', value: '+' },
		{ bt: 'digit', value: '4' },
		{ bt: 'digit', value: '5' },
		{ bt: 'digit', value: '6' },
		{ bt: 'math', value: '-' },
		{ bt: 'digit', value: '1' },
		{ bt: 'digit', value: '2' },
		{ bt: 'digit', value: '3' },
		{ bt: 'total', value: '=' },
		{ bt: 'digit', value: '0' },
		{ bt: 'clear', value: 'C' },
	];
	const handleDigit = (event) => {
		!op ? setOp1(op1 + event.target.value) : setOp2(op2 + event.target.value);
	};
	const handleMath = (event) => {
		setOp(event.target.value);
		if (pass) {
			setPass(false);
			setOp1(String(display));
			setOp2('');
			setDisplay(0);
		}
	};
	const handleTotal = () => {
		setPass(true);
		op === '+' && op1 && op2
			? setDisplay(Number(op1) + Number(op2))
			: setDisplay(Number(op1) - Number(op2));
	};
	const handleClear = () => {
		setOp('');
		setOp1('');
		setOp2('');
		setDisplay(0);
		setPass(false);
	};

	return (
		<div className={styles.app}>
			<fieldset className={styles.container}>
				<form>
					<input
						className={
							!pass ? styles.display : styles.display + ' ' + styles.result
						}
						type="text"
						name="display"
						value={pass ? display : op1 + op + op2 || '0'}
						readOnly={true}
					/>
					{ar.map((it) => {
						return (
							<input
								onClick={
									it.bt === 'digit'
										? handleDigit
										: it.bt === 'math'
											? handleMath
											: it.bt === 'total'
												? handleTotal
												: handleClear
								}
								className={styles.button + ' ' + styles[`${it.bt}`]}
								disabled={it.bt === 'math' && !op1 ? true : false}
								type="button"
								value={it.value}
								key={String(Date.now()) + String(Math.random())}
							/>
						);
					})}
				</form>
			</fieldset>
			<header className={styles['App-header']}></header>
		</div>
	);
}

export default App;
