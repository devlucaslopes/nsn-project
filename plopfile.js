module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'Generate a new component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Enter the name of the component'
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{name}}/index.tsx',
        templateFile: './plop/template-component.hbs'
      },
      {
        type: 'add',
        path: 'src/components/{{name}}/styles.ts',
        templateFile: './plop/template-styles.hbs'
      }
    ]
  })
}
