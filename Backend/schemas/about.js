// MdPerson
import {defineField} from 'sanity'
import {MdPerson as icon} from 'react-icons/md'

export default defineField({
  name: 'about',
  title: 'About Me',
  type: 'document',
  icon,
  fields: [
    // name
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),

    // Profile pic
    defineField({
      title: 'Images',
      name: 'images',
      type: 'image',

      options: {
        hotspot: true, // <-- Defaults to false
      },
    }),

    // Company name currently working
    defineField({
      name: 'company',
      title: 'Company',
      type: 'string',
      validation: (Rule) => Rule.required(),
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

    // social links
    defineField({
      name: 'social',
      title: 'Social Media',
      description: 'Add your social media links.',
      type: 'array',
      of: [
        {
          type: 'object',
          options: {
            columns: 2,
          },
          fields: [
            defineField({
              name: 'social',
              title: 'Social Media Name',
              type: 'string',
              options: {
                layout: 'dropdown',
                list: [
                  'Facebook',
                  'Instagram',
                  'LinkedIn',
                  'Gmail+',
                  'Twitter',
                  'Thread',
                  'Youtube',
                  'Whatsapp',
                  'Github',
                  'Leetcode',
                  'Geeksforgeek',
                ],
              },
            }),
            defineField({
              name: 'url',
              title: 'Social url',
              type: 'url',
              description: 'Paste your social media url',
            }),
          ],
        },
      ],
    }),

    // Intro Link
    defineField({
      name: 'intro',
      title: 'Intro video url',
      type: 'url',
      description: 'Paste your intro video url.',
    }),
    defineField({
      title: 'Resume',
      name: 'resume',
      type: 'file',
    }),

    // active or not
    defineField({
      name: 'isactive',
      title: 'IsActive',
      type: 'boolean',
      description: 'whether this profile is active or not',
      options: {
        layout: 'checkbox', // Display the checkbox inline
        list: ['Yes', 'No'], // Customize the labels for checked and unchecked
      },
    }),
  ],
})
