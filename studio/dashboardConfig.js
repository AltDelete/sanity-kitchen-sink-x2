export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '618bf7ca04f54c615e2ad387',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-x-2-studio',
                  apiId: '34a485ab-ff4f-437c-80b6-902d4eec9d0c'
                },
                {
                  buildHookId: '618bf7ca9efc53579a60fa93',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-x-2',
                  apiId: '5ca53bf8-25c1-4897-ab9c-24d569e0960f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/AltDelete/sanity-kitchen-sink-x2',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-x-2.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
