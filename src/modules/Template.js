import VercelTheme from '../templates/vercel-theme/VercelTheme'

// Update template themes here
const themes = {
  'vercel': VercelTheme,  
}




function Template(props) {

    const Theme = themes[props.theme];
  
    return (
      <div>       
        <Theme {...props.data}/>
      </div>
    );
  
  }

export default Template;