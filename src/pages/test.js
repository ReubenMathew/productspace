
export default function Test(){
    var svgString = `<svg><use xlink:href="/all.svg#gg-music"/></svg>`
            
    return(
        
        <div>
            <link href='https://css.gg/music.css' rel='stylesheet'></link>
            <div dangerouslySetInnerHTML={{ __html: svgString }} />
            <i class="gg-music h-auto w-auto"></i>
            
        </div>
    )
}