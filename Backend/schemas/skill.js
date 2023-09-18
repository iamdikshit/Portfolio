import {defineField} from 'sanity'
import {MdRocket as icon} from 'react-icons/md'

export default defineField({
  name: 'skill',
  title: 'Skill',
  type: 'document',
  icon,
  fields: [
    // project name
    defineField({
      name: 'skill',
      title: 'Skill',
      type: 'string',
    }),
    defineField({
      title: 'Images',
      name: 'images',
      type: 'image',

      options: {
        hotspot: true, // <-- Defaults to false
      },
    }),
  ],
})
