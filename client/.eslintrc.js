// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // 强制一行的最大长度
    "max-len":[1,160],

    "indent": [2, 2, { "SwitchCase": 1, "VariableDeclarator": 2}],
    // allow async-await
    'generator-star-spacing': 0,
    // 使用 === 替代 ==
    "eqeqeq": [2, "allow-null"],
    // 要求或禁止使用分号而不是 ASI（这个才是控制行尾部分号的，）
    "semi": [2,"always"],
    // 强制在parseInt()使用基数参数
    "radix": 2,
    // 强制在 function的左括号之前使用一致的空格
    "space-before-function-paren": [2, "always"],
    // 禁止出现空函数.如果一个函数包含了一条注释，它将不会被认为有问题。
    "no-empty-function":2,
    // 禁止不必要的分号
    "no-extra-semi": 0,
    //不能用多余的空格
    "no-multi-spaces": 2,
    //函数调用时 函数名与()之间不能有空格
    "no-spaced-func": 2,
    //对象字面量中冒号的前后空格
    "key-spacing": [0, { "beforeColon": false, "afterColon": true }],
    // 强制在关键字前后使用一致的空格 (前后腰需要)
    "keyword-spacing":2,
    // if else while for do后面的代码块是否需要{ }包围，参数：
    //    multi  只有块中有多行语句时才需要{ }包围
    //    multi-line  只有块中有多行语句时才需要{ }包围, 但是块中的执行语句只有一行时，
    //                   块中的语句只能跟和if语句在同一行。if (foo) foo++; else doSomething();
    //    multi-or-nest 只有块中有多行语句时才需要{ }包围, 如果块中的执行语句只有一行，执行语句可以零另起一行也可以跟在if语句后面
    //    [2, "multi", "consistent"] 保持前后语句的{ }一致
    //    default: [2, "all"] 全都需要{ }包围
    "curly": [2, "all"],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
