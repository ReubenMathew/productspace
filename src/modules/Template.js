import VercelTheme from '../templates/vercel-theme/VercelTheme'

// Update template themes here
const themes = {
  'vercel': VercelTheme,  
}

const data = {
  tagline: 'Brainstorm. Organize. Create.',
  description: 'VennFX is a cross-platform Venn Diagram desktop application built for performance and customization.',
  download: 'https://github.com/EECS2311-Team8/SoftwareDevelopmentProject/releases/tag/vF',
  source: 'https://github.com/ReubenMathew/VennFX',
  projectName: 'VennFX',
  docs: "https://github.com/ReubenMathew/VennFX/tree/master/Documentation",
  author: 'Reuben Ninan'
}

function Template(props) {

    const Theme = themes[props.theme];
  
    return (
      <div>       
        <Theme {...data}/>
      </div>
    );
  
  }

export default Template;