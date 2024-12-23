import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Roadmap FullStack',
      sidebar: [
        {
          label: 'Roadmap',
          items: [
            { label: 'Nivel Inicial', link: '/inicio/nivel_inicio' },
            { label: 'Nivel Intermedio', link: '/inicio/nivel_intermedio' },
            { label: 'Nivel Avanzado', link: '/inicio/nivel_avanzado' },
          ]
        },
        {
          label: 'Frontend',
          items: [
            { label: 'Inicio', link: '/frontend/inicio' },
            { label: 'React', link: '/frontend/react' },
            { label: 'Angular', link: '/frontend/angular' },
            { label: 'Vue', link: '/frontend/vue' },
            { label: 'Astro', link: '/frontend/astro' },
            { label: 'Svelte', link: '/frontend/svelte' }
          ]
        },
        {
          label: 'Backend',
          items: [
            { label: 'Inicio', link: '/backend/inicio' },
            { label: 'Express', link: '/backend/express' },
            { label: 'Django', link: '/backend/django' },
            { label: 'Laravel', link: '/backend/laravel' },
            { label: '.NET', link: '/backend/net' },
            { label: 'Spring', link: '/backend/spring' },
          ]
        },
        {
          label: 'Revisión de ejercicios',
          link: '/revision'
        }
      ],
/*       customCss: [
        './src/styles/custom.css',
      ], */
    })
  ],
  // Aquí añadimos una página personalizada fuera de Starlight
  pages: {
    '/ejercicios': 'src/pages/ejercicios.astro',
  },
});