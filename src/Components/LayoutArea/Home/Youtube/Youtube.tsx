import "./Youtube.css";

function Youtube(): JSX.Element {
    const linkFromYt = "https://www.youtube.com/embed/F1vcruph8JA"
    
  
    return (
        <div className="Youtube">
			<iframe src= {linkFromYt} > </iframe>
        </div>
    );
}

export default Youtube;
