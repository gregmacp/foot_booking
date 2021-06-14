import {Component} from "react";
import '../App.css';
class Services extends Component {

    render() {
        return (
            <div>
                <section id="services" className="section section-light">
                    <div className="container">
                        <div className="inner">
                            <div className="row">
                                <div className="col-md">
                                    <h2>Services</h2>
                                    <h5>Available treatments include:</h5><br/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm">Nail trimming</div>
                                <div className="col-sm">Athlete's foot</div>
                            </div>
                            <div className="row">
                                <div className="col-sm">Treatment of corns, calluses and verrucas</div>
                                <div className="col-sm">Dry cracked heels</div>
                            </div>
                            <div className="row">
                                <div className="col-sm">Fungal and thickened nails</div>
                                <div className="col-sm">Diabetic foot care</div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
export default Services;
