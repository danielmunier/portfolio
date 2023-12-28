
const Button = ({text, bgColor, fontColor, href, link}) => {
    return (

        <button backgroundColor={bgColor}  style={
            {
                border: 0,
                padding: "1vw",
                borderRadius: "5%",
                fontColor: fontColor,
                backgroundColor: bgColor,
                cursor: "pointer",
                fontWeight: 800,

                
                
            }
        }>
           <a style={{
                textDecoration: "none",
                color: fontColor
            }} href={href}>
            {text}
            </a>
        </button>
        
    )
}


export default Button