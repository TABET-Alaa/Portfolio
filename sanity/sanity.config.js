import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import schema from './schemas/schema'

export default defineConfig({
  name: 'default',
  title: 'sanity',

  projectId: '0h75iih2',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schema,
  },
})
