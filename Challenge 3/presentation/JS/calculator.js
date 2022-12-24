class Calculator{
    constructor(previousText, currentText)
    {
        this.previousText = previousText
        this.currentText = currentText
        this.clear()
    }

    clear(){
        this.currentOperand = ''
        this.previousOperand = ''
        this.operator = undefined
    }

    delete(){
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
    
    }

    append(number) {
        if(number === '.' && this.currentOperand.includes('.'))return 
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }

    choose(operator) {
        if(this.currentOperand === '') return
        if(this.previousOperand != ''){
            this.compute()
        }
        this.operator = operator
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
    }

    compute(){
        let answer;
        const previous = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)

        if(isNaN(previous) || isNaN(current)) return

        switch(this.operator){
            case '+': answer = previous + current
            break
            case '-': answer = previous - current
            break
            case '*': answer = previous * current
            break
            case '/': answer = previous / current
            break
            default: return
        }

        this.currentOperand = answer
        this.operator = undefined
        this.previousOperand = ''
    }

    DisplayNumber(number){
        const stringNumber = number.toString()
        const intDigit = parseFloat(stringNumber.split('.')[0])
        const decDigit = stringNumber.split('.')[1]

        let intDisplay

        if(isNaN(intDigit))
        {
            intDisplay = ''
        }
        else
        {
            intDisplay = intDigit.toLocaleString('en', {maximumFractionDigits: 0})

        }
        if(decDigit != null) 
        { return `${intDisplay}.${decDigit}` }
        else 
        { return intDisplay }
    }

    UpdateDisplay(){
        this.currentText.innerText = 
        this.DisplayNumber(this.currentOperand)

        if(this.operator != null){
            this.previousText.innerText = 
            `${this.DisplayNumber(this.previousOperand)} ${this.operator}`
        }
        else {
            this.previousText.innerText = ''
        }

    }
}


const previousText = document.querySelector('[data-op]')
const currentText = document.querySelector('[data-result]')

const numbers = document.querySelectorAll('[data-number]')
const operator = document.querySelectorAll('[data-operator]')

const clear = document.querySelector('[data-clear]')
const del = document.querySelector('[data-delete]')
const equal = document.querySelector('[data-equal]')


const calculator = new Calculator(previousText, currentText)

numbers.forEach(button => {
    button.addEventListener('click', () => {
        calculator.append(button.innerText)
        calculator.UpdateDisplay()
    })
})

operator.forEach(button => {
    button.addEventListener('click', () =>{
        calculator.choose(button.innerText)
        calculator.UpdateDisplay()
    })
})

equal.addEventListener('click', () => {
    calculator.compute()
    calculator.UpdateDisplay()
})

clear.addEventListener('click', () => {
    calculator.clear()
    calculator.UpdateDisplay()
})

del.addEventListener('click', () => {
    calculator.delete()
    calculator.UpdateDisplay()
})