const chalk = require('chalk');
const fs = require('fs');
const figures = require('figures');

const args = process.argv;

const command = args[2];

let newElement = args[3];

if (command === 'list') {
    fs.readFile('./todos.txt', 'utf8', (error, data) => {
        if (error) {
            console.log(chalk.red(error));
            return;
        };
        const todos = data.split(',');
        const todosOnNewLines = todos.join('\n');
        console.log('This are your TODOs: ' + '\n' + chalk.green(todosOnNewLines));
    });
};

if (command === 'add') {
    newElement = newElement + '\n';
    fs.appendFile('./todos.txt', newElement, (error, data) => {
        if (error) {
            console.log(chalk.red(error));
            return;
        }
        console.log(newElement + 'was added to the list!')
    })
};

if (command === 'remove') {
    fs.readFile('./todos.txt', 'utf8', (error, data) => {
        if (error) {
            console.log(chalk.red(error));
            return;
        }
        const array = data.split();
        let newarray = array.slice(0, 0)
        console.log(newarray);
    })

};

if (command === 'reset') {
    fs.truncate('./todos.txt', 0, (error, data) => {
        if (error) {
            console.log(chalk.red(error));
            return;
        }
        console.log(data);
    })
};

if (command === 'help') {
    fs.readFile('./help.txt', 'utf8', (error, data) => {
        if (error) {
            console.log(chalk.red(error));
            return;
        };
        console.log(data);
    })
}

if (command === 'love') {
    console.log(figures.heart + ' Coding');
};
