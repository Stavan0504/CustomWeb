import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'jamstackySanity',

  projectId: '7lpprm62',
  dataset: 'jamstacky',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
