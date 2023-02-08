import '../App.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function CountryData({match}) {
    const { id } = useParams()

    const [singlecountrydata, setCountry] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        fetch('/api/getallcountrydata').then(res => res.json()).then(country => {setCountry({ country });setLoading(false);});
    },[]);

    if (loading){
        return(<p>loading</p>);
    }
    else{
        const cont = singlecountrydata.country[id];
        return (
            <div>
                <a href='/' style={{fontSize:'20px'}}>⬅️back</a>
              <h1 className={"title"}>{cont.flag} {cont.name.common}</h1>
              <div className={"row"}>
                <img src={cont.flags.svg} alt={cont.name.common} className={"col-sm-6"} style={{objectFit:'contain'}}/>
                <div className={"col-sm-6"}>
                <h3>Details</h3>
                <hr/>
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">Topic</th>
                        <th scope="col">Stat</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Language</th>
                            <td>{JSON.stringify(cont.languages)}</td>
                        </tr>
                        <tr>
                            <th scope="row">SA</th>
                            <td>{cont.area}</td>
                        </tr>
                        <tr>
                            <th scope="row">Population</th>
                            <td>{cont.population}</td>
                        </tr>
                        <tr>
                            <th scope="row">Car drive side</th>
                            <td>{cont.car.side}</td>
                        </tr>
                    </tbody>
                </table>
                <h3>Location</h3>
                <hr/>
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">Topic</th>
                        <th scope="col">Stat</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Capital</th>
                            <td>{cont.capital}</td>
                        </tr>
                        <tr>
                            <th scope="row">Time Zone</th>
                            <td>{cont.timezones[0]}</td>
                        </tr>
                        <tr>
                            <th scope="row">Continent</th>
                            <td>{cont.continents[0]}</td>
                        </tr>
                        <tr>
                            <th scope="row">Lat</th>
                            <td>{cont.latlng[0]}</td>
                        </tr>
                        <tr>
                            <th scope="row">Lng</th>
                            <td>{cont.latlng[1]}</td>
                        </tr>
                    </tbody>
                </table>
                </div>
                <iframe style={{aspectRatio:4/3, width:'100%', maxHeight:'100vh'}} id="gmap_canvas" src={"https://maps.google.com/maps?q="+cont.name.common+"&t=&z=5&ie=UTF8&iwloc=&output=embed"} frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
              </div>
            </div>
          );
    }
}

export default CountryData;
