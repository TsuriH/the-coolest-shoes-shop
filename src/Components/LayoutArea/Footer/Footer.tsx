import "./Footer.css";

interface YearProp {
    year: number;
}

function Footer(props: YearProp): JSX.Element {
   
    return (
        <div className="Footer">
			<p>All Rights Reserved - Moshe Ufnik Web Development {props.year} ©</p>
        </div>
    );
}

export default Footer;
