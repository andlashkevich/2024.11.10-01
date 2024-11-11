
import styles from './App.module.css';

function App() {
	return (
		<div className={styles.app}>
			<fieldset className={styles.container}>
				<form>
					<input className={styles.display} type="text" name="display" readonly/>

					<input className={styles.button + ' ' + styles.digit} type="button" value="7"/>
					<input className={styles.button + ' ' + styles.digit} type="button" value="8"/>
					<input className={styles.button + ' ' + styles.digit} type="button" value="9"/>
					<input className={styles.button + ' ' + styles.math} type="button" value="+"/>
					<br/>
					<input className={styles.button + ' ' + styles.digit} type="button" value="4"/>
					<input className={styles.button + ' ' + styles.digit} type="button" value="5"/>
					<input className={styles.button + ' ' + styles.digit} type="button" value="6"/>
					<input className={styles.button + ' ' + styles.math} type="button" value="−"/>
					<br/>
					<input className={styles.button + ' ' + styles.digit} type="button" value="1"/>
					<input className={styles.button + ' ' + styles.digit} type="button" value="2"/>
					<input className={styles.button + ' ' + styles.digit} type="button" value="3"/>
					<input className={styles.button + ' ' + styles.math} type="button" value="="/>
					<input className={styles.button + ' ' + styles.digit} type="button" value="0"/>
					<input className={styles.button + ' ' + styles.clear} type="button" value="C"/>

				</form>
			</fieldset>
			<header className={styles['App-header']}></header>
		</div>
	);
}

export default App;
