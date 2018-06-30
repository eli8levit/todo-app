module.exports = {
    "extends": "airbnb",
    "env": {
        "browser": true
    },
    "rules": {
        "comma-dangle": 0,
        "import/prefer-default-export": 0,
        'no-shadow': [
            'error',
            {
              allow: ['addTodo', 'deleteTodo', 'toggleTodo', 'editTodo'],
            },
          ],
    }
};