const _ = require('lodash')

module.exports = function (plop) {
  plop.setHelper('pascalCase', (text) => _.upperFirst(_.camelCase(text)))
  plop.setHelper('kebabCase', (text) => _.kebabCase(text))
  plop.setHelper('camelCase', (text) => _.camelCase(text))
  plop.setHelper('lowerCase', (text) => text.toLowerCase())
  plop.setHelper('capitalize', (text) => _.capitalize(text))

  const operations = ['list', 'create', 'edit', 'show']

  plop.setHelper('hookExtension', (operation) =>
    operation === 'list' ? 'tsx' : 'ts',
  )

  plop.setGenerator('feature', {
    description: 'Generate a new feature with private routes and components',
    prompts: [
      {
        type: 'input',
        name: 'featureName',
        message: 'Feature name (e.g., User):',
        validate: (value) => (value ? true : 'Feature name is required'),
      },
      {
        type: 'input',
        name: 'displayNameSingular',
        message: 'Singular display name (e.g., Usuário):',
        validate: (value) => (value ? true : 'Singular display name is required'),
      },
      {
        type: 'input',
        name: 'displayNamePlural',
        message: 'Plural display name (e.g., Usuários):',
        validate: (value) => (value ? true : 'Plural display name is required'),
      },
      {
        type: 'input',
        name: 'routeName',
        message: 'Route name (e.g., administracao/usuarios):',
        validate: (value) => (value ? true : 'Route name is required'),
      },
      {
        type: 'input',
        name: 'apiRoute',
        message: 'API route (e.g., users):',
        validate: (value) => (value ? true : 'API route is required'),
      },
      {
        type: 'list',
        name: 'article',
        message: 'Select the article of the display name:',
        choices: ['o', 'a'],
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/types/{{kebabCase featureName}}.ts',
        templateFile: 'plop-templates/FeatureType.hbs',
      },
      {
        type: 'add',
        path: 'src/schemas/{{kebabCase featureName}}/{{camelCase featureName}}CreateSchema.ts',
        templateFile: 'plop-templates/FeatureCreateSchema.hbs',
      },
      {
        type: 'add',
        path: 'src/schemas/{{kebabCase featureName}}/{{camelCase featureName}}UpdateSchema.ts',
        templateFile: 'plop-templates/FeatureUpdateSchema.hbs',
      },
      ...operations.flatMap((operation) => [
        {
          type: 'add',
          path: 'src/pages/{{kebabCase featureName}}/{{operation}}/{{pascalCase featureName}}{{pascalCase operation}}.tsx',
          templateFile: 'plop-templates/Feature{{pascalCase operation}}.hbs',
          data: { operation },
        },
        {
          type: 'add',
          path: 'src/pages/{{kebabCase featureName}}/{{operation}}/use{{pascalCase featureName}}{{pascalCase operation}}.{{hookExtension operation}}',
          templateFile: 'plop-templates/Feature{{pascalCase operation}}Hook.hbs',
          data: { operation },
        },
        {
          type: 'add',
          path: 'src/services/{{kebabCase featureName}}/{{kebabCase featureName}}-{{operation}}.service.ts',
          templateFile: 'plop-templates/Feature{{pascalCase operation}}Service.hbs',
          data: { operation },
        },
        {
          type: 'add',
          path: 'src/pages/{{kebabCase featureName}}/{{operation}}/index.ts',
          templateFile: 'plop-templates/FeatureIndex.hbs',
          data: { operation },
        },
      ]),
      {
        type: 'add',
        path: 'src/services/{{kebabCase featureName}}/{{kebabCase featureName}}-update.service.ts',
        templateFile: 'plop-templates/FeatureUpdateService.hbs',
        data: { operation: 'update' },
      },
      {
        type: 'add',
        path: 'src/services/{{kebabCase featureName}}/{{kebabCase featureName}}-delete.service.ts',
        templateFile: 'plop-templates/FeatureDeleteService.hbs',
        data: { operation: 'delete' },
      },
      {
        type: 'add',
        path: 'src/routes/private/{{camelCase featureName}}Routes.tsx',
        templateFile: 'plop-templates/FeatureRoutes.hbs',
      },
    ],
  })
}
