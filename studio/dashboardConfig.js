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
                  buildHookId: '5ff6d63ade1240acd3685340',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-9g2qbj1m',
                  apiId: '5f217ffb-bd00-43d1-9163-3d3fae933345'
                },
                {
                  buildHookId: '5ff6d63a0f0cb9b0ad27bc70',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-243c8uo4',
                  apiId: 'f11c4b1d-0f92-4462-affe-a40271f0ec28'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/daybot/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-243c8uo4.netlify.app', category: 'apps'}
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
