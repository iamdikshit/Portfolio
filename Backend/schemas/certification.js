import {defineField} from 'sanity'
import {MdOutlineContentPaste as icon} from 'react-icons/md'

export default defineField({
  name: 'certificate',
  title: 'Certificate',
  type: 'document',
  icon,
  fields: [
    // company name
    defineField({
      name: 'course',
      title: 'Course',
      type: 'string',
      description: 'Course or certificate name.',
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
          name: 'noexpiry',
          title: 'No expiry',
          description: 'Check this box if you are certifate has no expiry date.',
          type: 'boolean',
          options: {
            layout: 'checkbox', // Display the checkbox inline
            list: ['Yes', 'No'], // Customize the labels for checked and unchecked
          },
        }),
      ],
    }),

    // Certificate image
    defineField({
      name: 'certificateImage',
      title: 'Certificate Image',
      type: 'image',
      options: {
        hotspot: true,
      },
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
