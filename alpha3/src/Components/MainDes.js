import "./MainDes.css";
function MainDes(props){
    return(
        <>
        <div className={props.cName}>
            <img src={props.heroImg} alt="Main Image" />
            <div className="main-text">
                <h1>{props.title}</h1>
                <p>{props.para}</p>
                <a href={props.where} className={props.btnClass}>{props.btnText}</a>
            </div>
        </div>
        </>
    )

}
export default MainDes