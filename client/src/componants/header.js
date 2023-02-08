import '../App.css';

function Header() {

    function random(){

    }

    return (
        <div className={'w-100 d-flex flex-row'} style={{justifyContent:"space-around", backgroundColor:"orange"}}>
            <h2>Country Data</h2>
            <a style={{padding:'5px'}} href={'/'}>Home</a>
            <a style={{padding:'5px'}} href={'/#/country/'+Math.floor(Math.random()*250)}>Random</a>
        </div>
        );
}

export default Header;