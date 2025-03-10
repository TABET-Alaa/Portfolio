export default {
  name: 'projet',
  title: 'Projet',
  type: 'document',
  fields: [
    {
      name: "title",
      title: "title",
      description: "titre du projet",
      type: "string"
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options:{
        hotspot: true
      }
    },
    {
      name: "summary",
      title: "Summary",
      type: "text",
    },
    {
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{type: "reference", to: {type: "skill"} }],
    },
    {
      name: "linkToBuild",
      title: "LinkToBuild",
      type: "url",
    },
  ],

}
