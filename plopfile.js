// eslint-disable-next-line no-undef
module.exports = function (plop) {
  plop.setGenerator('Component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: '.plop/component/component.hbs'
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/styles.ts',
        templateFile: '.plop/component/styles.hbs'
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/index.ts',
        templateFile: '.plop/component/index.hbs'
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
        templateFile: '.plop/component/stories.hbs'
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.spec.tsx',
        templateFile: '.plop/component/test.hbs'
      }
    ]
  });

  plop.setGenerator('Layout', {
    description: 'Create a layout component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your layout component name?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/layout/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: '.plop/component/component.hbs'
      },
      {
        type: 'add',
        path: 'src/layout/{{pascalCase name}}/styles.ts',
        templateFile: '.plop/component/styles.hbs'
      },
      {
        type: 'add',
        path: 'src/layout/{{pascalCase name}}/index.ts',
        templateFile: '.plop/component/index.hbs'
      },
      {
        type: 'add',
        path: 'src/layout/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
        templateFile: '.plop/component/stories.hbs'
      },
      {
        type: 'add',
        path: 'src/layout/{{pascalCase name}}/{{pascalCase name}}.spec.tsx',
        templateFile: '.plop/component/test.hbs'
      }
    ]
  });
};
