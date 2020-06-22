
function VercelTheme(props){
  console.log("Vercel Theme",props)
  return (
    <div>
      <div>{props.ProjectName}</div>
      <div>{props.Tagline}</div>
      <div>{props.Description}</div>
      <div>{props.Download}</div>
      <div>{props.Source}</div>
      <div>{props.Docs}</div>
    </div>
  );
}

export default VercelTheme;