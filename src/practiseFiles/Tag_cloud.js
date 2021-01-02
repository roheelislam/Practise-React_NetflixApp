//*******Rename te file to index.js*****


// import React from 'react';
// import ReactDOM, { render } from 'react-dom';
// import { TagCloud } from 'react-tagcloud'

// /* Implemented Cloud Tag for practise purposes see more details in below website
// https://madox2.github.io/react-tagcloud/ */

// const data = [
//   { value: 'JavaScript', count: 38 },
//   { value: 'React', count: 30 },
//   { value: 'Nodejs', count: 28 },
//   { value: 'Express.js', count: 25 },
//   { value: 'HTML5', count: 33 },
//   { value: 'MongoDB', count: 18 },
//   { value: 'CSS3', count: 20 },
// ]
 
// const SimpleCloud = () => (
//   <TagCloud
//     minSize={12}
//     maxSize={35}
//     tags={data}
//     onClick={tag => alert(`'${tag.value}' was selected!`)}
//   />
// )
// const customRenderer = (tag, size, color) => {
//     return (
//       <span key={tag.value} style={{ color }} className={`tag-${size}`}>
//         {tag.value}
//       </span>
//     )
//   }
   
//   const CustomizedCloud = () => (
//     <TagCloud tags={data} minSize={1} maxSize={5} renderer={customRenderer} />
  
//   )
//   ReactDOM.render(<CustomizedCloud/>, document.getElementById('root'));
