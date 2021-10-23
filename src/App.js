import React, {Component} from "react";
import './App.css';

function App() {
  return <MathTask/>
}

class MathTask extends Component {

    constructor(props) {
        super(props);
        this.state = {
            answer: []
        };
    }

    check =() => {
        let value = this.inputRef.value;
        let sum = 0;
        let answer = [];
        for (let n = 0; n <= Math.floor(value / 5); n++) {
            sum = 0;
            let row = [];
            for (let h = 0; h < n; h++) {
                sum += 5;
                row.push(5);
            }
            let sumBefore2 = sum;
            let remnant = value - sum;
            for (let y = 0; y <= Math.floor(remnant / 2); y++) {
                for (let j = 0; j < y; j++) {
                    sum += 2;
                    row.push(2);
                }
                for (let g = 0; sum < value; g++) {
                    sum += 1;
                    row.push(1);
                }
                if (remnant && row.length) {
                    answer.push(row);
                    row = [];
                    for (let z = 0; z < sumBefore2 / 5 ; z++) {
                        row.push(5);
                    }
                    sum = sumBefore2;
                }
            }
            if (!remnant && row.length) {
                answer.push(row);
                row = [];
                sum = 0;

            }
        }

        this.setState({ answer });
    }

    render() {
        const { answer } = this.state;
        const listItems = answer.map((row, key) =>
            // Неправильно! Ключ необходимо определить здесь:
            <div key={key} children={row}/>
        );
        console.log(listItems)
        return(
            <div>
                <span>У вас есть бочка емкостью</span>
                <input
                    type="number"
                    ref={el => this.inputRef = el}
                />
                <span>Л. и бутылки емкостью 1, 2 и 5 литров.</span>
                <div>Вам нужно высчитать все возможные варианты заполнения бочки.</div>
                <button onClick={this.check}>
                    высчитать
                </button>
                <div children={`у вас получилось вариантов: ${answer.length || 0}`}/>
                {listItems}
                <div id="answer"/>
            </div>
        )
    }
}

export default App;