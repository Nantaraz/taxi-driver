import React, { useState } from 'react';
import "./Accueil.css"
//import { ResponsiveComponent } from "react-responsive-component";
import 'bootstrap/dist/css/bootstrap.min.css'
import image1 from "./vam.jpg"
import image2 from "./logo.jpg"

// const Desktop = props => <ResponsiveComponent {...props} minWidth={992} />;
// const Tablet = props => <ResponsiveComponent {...props} minWidth={768} maxWidth={991} />;
// const Mobile = props => <ResponsiveComponent {...props} maxWidth={767} />;
// const Default = props => <ResponsiveComponent {...props} minWidth={768} />;

const Accueil = props => {
    
        const initialFormState = { depart: '', arrive: ''}
        const [ user, setUser ] = useState(initialFormState);
    
        return (
            <center>
                <div className=" responsive-font-size">
                    <h3 className="ba">Tolotra manampy anao amin'ny fitadiavana taxi farany tsotra sy azo antoka</h3>
                    <p>“Ny taxi no manatona anao any amin'ny toerana izay misy anao”</p>
                    <p>Manasa anao mba iditra ao amin'ny menu tompoko</p>
                    <img src={image2} width="270px" height="130px"/>
                </div>
                <div className="bb">
                    <img src={image1} width="80%" height="330px"/>
                </div>

                <form
			onSubmit={event => {
				event.preventDefault()
				if (!user.depart || !user.arrive) return 
				setUser(initialFormState)	
				
			}}
		>
	<div className="aaa table-responsive">
		<center >
		
			<table>
				<tbody>
					<tr>
					
						<td>
							{/* <select  type="text" name="depart"   onChange={handleInputChange} /> */}
							<select id='aaaa' className='l' aria-label="Où êtes-vous?">
                                <option >Où êtes-vous?</option>
                                <option value="1">Ankatso</option>
                                <option value="2">Ambanidia</option>
                                <option value="3">Antsahabe</option>
                                <option value="4">Ankadifotsy</option>
                                <option value="5">Ankady</option>
                                <option value="6">Ambohipo</option>
                                <option value="7">Ambolokandrina</option>
                                <option value="8">Ankadimbahoaka</option>
                                <option value="9">Anosy</option>
                                <option value="10">Analakely</option>
                                <option value="11">Anosizato</option>
                                <option value="12">Analamahitsy</option>
                                <option value="13">Bel'air</option>
                                <option value="14">Colesium</option>
                                <option value="15">Faravoitra</option>
                                <option value="16">Gamo</option>
                                <option value="17">Maskoty</option>
                                <option value="18">Mascar</option>
                                <option value="19">Mandroseza</option>
                                <option value="20">Betongolo</option>
                                <option value="21">67Ha</option>
                                <option value="22">119 Ankatso</option>
                                <option value="23">Antsakaviro</option>
                                <option value="24">Manjakaray</option>
                                <option value="25">Ambodivona</option>
                                <option value="26">Ankazomanga</option>
                                <option value="27">Ambohijatovo</option>
                                <option value="28">Faravoitra</option>
                                <option value="29">Ankadikely</option>
                                <option value="30">Sabnam</option>
                                <option value="31">Ampasapito</option>
</select>
						</td>
					</tr>
					<tr>
						
						<td>
							{/* <input id='l' type="text" name="arrive" value={user.arrive} placeholder="Où allez-vous?" onChange={handleInputChange} /> */}
							
							<select id='bbbb' className='l' aria-label="Où allez-vous?" >
                                <option value="1">Où allez-vous?</option>
                                <option >Ankatso</option>
                                <option value="2">Ambanidia</option>
                                <option value="3">Antsahabe</option>
                                <option value="4">Ankadifotsy</option>
                                <option value="5">Ankady</option>
                                <option value="6">Ambohipo</option>
                                <option value="7">Ambolokandrina</option>
                                <option value="8">Ankadimbahoaka</option>
                                <option value="9">Anosy</option>
                                <option value="10">Analakely</option>
                                <option value="11">Anosizato</option>
                                <option value="12">Analamahitsy</option>
                                <option value="13">Bel'air</option>
                                <option value="14">Colesium</option>
                                <option value="15">Faravoitra</option>
                                <option value="16">Gamo</option>
                                <option value="17">Maskoty</option>
                                <option value="18">Mascar</option>
                                <option value="19">Mandroseza</option>
                                <option value="20">Betongolo</option>
                                <option value="21">67Ha</option>
                                <option value="22">119 Ankatso</option>
                                <option value="23">Antsakaviro</option>
                                <option value="24">Manjakaray</option>
                                <option value="25">Ambodivona</option>
                                <option value="26">Ankazomanga</option>
                                <option value="27">Ambohijatovo</option>
                                <option value="28">Faravoitra</option>
                                <option value="29">Ankadikely</option>
                                <option value="30">Sabnam</option>
                                <option value="31">Ampasapito</option>
							</select>

							<div id="mi" class="nan">
							</div>
						</td>
					</tr>
					
				</tbody>
			</table>
			
			<button class="btn btn-primary mian" onClick = {()=>{
                document.getElementById('cccc').innerHTML="";
				var x1 = document.getElementById("aaaa").value;
                var y1 = document.getElementById("bbbb").value;
                var tab = ['taxi Ankatso-Anosizato </br> n°: 1342TAF </br> tél: 039 17 135 20','taxi Analamahitsy-Ampasapito </br> n°: 8735GAT </br> tél: 033 90 128 61']
            for(var i=1;i<=x1.length;i++) {
                for(var j=1;j<=y1.length;j++) {
                    if(x1[1]==y1[j]){
                            console.log(document.getElementById('cccc').innerHTML =tab[0])
                } else if(x1[2]==y1[j]) {
                    console.log(document.getElementById('cccc').innerHTML =tab[1])
                }

                else if(x1[3]==y1[j]) {
                    console.log(document.getElementById('cccc').innerHTML =tab[2])
                }
            
            
            }}

			}}
			>Taxi list</button>
			<div id='cccc'></div>
		</center>	
	</div>	
	</form>


            </center>
        )
        
      
    
}
export default  Accueil