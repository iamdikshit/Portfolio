import {defineField} from 'sanity'
import {MdComputer as icon} from 'react-icons/md'

export default defineField({
  name: 'project',
  title: 'Project',
  type: 'document',
  icon,
  fields: [
    // project name
    defineField({
      name: 'name',
      title: 'Project Name',
      type: 'string',
    }),
    defineField({
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    }),
    // Work duration
    defineField({
      name: 'duration',
      title: 'Duration',
      type: 'object',
      options: {
        columns: 2,
      },
      fields: [
        defineField({
          name: 'start',
          title: 'Start Date',
          type: 'date',
          validation: (Rule) => Rule.required(),
        }),

        defineField({
          name: 'end',
          title: 'End Date',
          type: 'date',
        }),
        defineField({
          name: 'present',
          title: 'Presently Working',
          description: 'Check this box if you are currently working in this company.',
          type: 'boolean',
          options: {
            layout: 'checkbox', // Display the checkbox inline
            list: ['Yes', 'No'], // Customize the labels for checked and unchecked
          },
        }),
      ],
    }),
    // Role
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    // Description
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    }),
    // Technology
    defineField({
      name: 'technology',
      title: 'Technology',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
      options: {
        layout: 'tags',
      },
    }),

    // Media
    defineField({
      name: 'media',
      title: 'Media',
      type: 'object',
      fields: [
        defineField({
          title: 'Images',
          name: 'images',
          type: 'array',
          of: [{type: 'image'}],
          options: {
            hotspot: true, // <-- Defaults to false
          },
        }),

        defineField({
          name: 'video',
          title: 'Video url',
          type: 'url',
          description: 'Paste your youtube url link.',
        }),
      ],
    }),

    // Live Link
    defineField({
      name: 'live',
      title: 'Live url',
      type: 'url',
      description: 'Paste your live website url.',
    }),
    // github link
    defineField({
      name: 'github',
      title: 'Github url',
      type: 'url',
      description: 'Paste your github url.',
    }),

    // active or not
    defineField({
      name: 'isactive',
      title: 'IsActive',
      type: 'boolean',
      description: 'whether this project is active or not',
      options: {
        layout: 'checkbox', // Display the checkbox inline
        list: ['Yes', 'No'], // Customize the labels for checked and unchecked
      },
    }),
  ],
})
