// import React from 'react'
// import PropTypes from 'prop-types'
// import { IndexPageTemplate } from '../../templates/index-page'

// const IndexPagePreview = ({ entry, getAsset }) => {
//   const data = entry.getIn(['data']).toJS()

//   if (data) {
//     return (
//       <IndexPageTemplate
//         image={getAsset(data.image)}
//         title={data.title}
//         heading={data.heading}
//         subheading={data.subheading}
//         description={data.description}
//         intro={data.intro || { blurbs: [] }}
//         mainpitch={data.mainpitch || {}}
//       />
//     )
//   } else {
//     return <div>Loading...</div>
//   }
// }

// IndexPagePreview.propTypes = {
//   entry: PropTypes.shape({
//     getIn: PropTypes.func,
//   }),
//   getAsset: PropTypes.func,
// }

// export default IndexPagePreview
// import React from 'react'
// import PropTypes from 'prop-types'
// import { BlogPostTemplate } from '../../templates/blog-post'

// const BlogPostPreview = ({ entry, widgetFor }) => {
//   console.log("BlogPostPreview -> entry", entry)
//   const tags = entry.getIn(['data', 'tags'])
//   return (
//     <BlogPostTemplate
//       content={widgetFor('body')}
//       description={entry.getIn(['data', 'description'])}
//       tags={tags && tags.toJS()}
//       title={entry.getIn(['data', 'title'])}
//     />
//   )
// }

// BlogPostPreview.propTypes = {
//   entry: PropTypes.shape({
//     getIn: PropTypes.func,
//   }),
//   widgetFor: PropTypes.func,
// }

// export default BlogPostPreview
