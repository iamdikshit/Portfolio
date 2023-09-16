import {defineField} from 'sanity'
import {MdAssessment as icon} from 'react-icons/md'

export default defineField({
  name: 'workExperience',
  title: 'WorkExperience',
  type: 'document',
  icon,
  fields: [
    // company name
    defineField({
      name: 'company',
      title: 'Company',
      type: 'string',
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
    // active or not
    defineField({
      name: 'isactive',
      title: 'IsActive',
      type: 'boolean',
      description: 'whether this work experience is active or not',
      options: {
        layout: 'checkbox', // Display the checkbox inline
        list: ['Yes', 'No'], // Customize the labels for checked and unchecked
      },
    }),
  ],
})
