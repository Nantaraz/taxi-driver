import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./Menu.css";
import image from "./vam.jpg";
import AddMenu from "./AddMenu"
import ImageUploader from 'react-images-upload';

const Menu = props => {
	const initialFormState = { depart: '', arrive: ''}
	const [ user, setUser ] = useState(initialFormState)
	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!user.depart || !user.arrive) return 
				setUser(initialFormState)	
				
			}}
		>
	<div className="aaa">
		<center >
		
			<table>
				<tbody>
					<tr>
					
						<td>
							{/* <select  type="text" name="depart"   onChange={handleInputChange} /> */}
							<select id='aaaa' className='l' aria-label="Où êtes-vous?">
                                <option value="0">Où êtes-vous?</option>
                                <option value="1">Ankatso</option>
                                <option value="2">Ambanidia</option>
                                <option value="3">Antsahabe</option>
                                <option value="4">Ankadifotsy</option>
                                <option value="5">Ankady</option>
                                <option value="6">Ambohipo</option>
                                <option value="7">Ambolokandrina</option>
                                <option value="8">Ankadimbahoaaka</option>
                                <option value="9">Anosy</option>
                                <option value="10">Analakely</option>
                                <option value="11">Anosizato</option>
                                <option value="12">Analamahitsy</option>
                                <option value="13">Bel'air</option>
                                <option value="14">Colesium</option>
                                <option value="15">Faravoitra</option>
                                <option value="16">Gamo</option>
                                <option value="17">Mascott</option>
                                <option value="18">Mascar</option>
                                <option value="19">Mandroseza</option>
                                <option value="20">Betongolo</option>
                                <option value="21">67Ha</option>
                                <option value="22">119</option>
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
                                <option value="0">Où allez-vous?</option>
                                <option value="1">Ankatso</option>
                                <option value="2">Ambanidia</option>
                                <option value="3">Antsahabe</option>
                                <option value="4">Ankadifotsy</option>
                                <option value="5">Ankady</option>
                                <option value="6">Ambohipo</option>
                                <option value="7">Ambolokandrina</option>
                                <option value="8">Ankadimbahoaaka</option>
                                <option value="9">Anosy</option>
                                <option value="10">Analakely</option>
                                <option value="11">Anosizato</option>
                                <option value="12">Analamahitsy</option>
                                <option value="13">Bel'air</option>
                                <option value="14">Colesium</option>
                                <option value="15">Faravoitra</option>
                                <option value="16">Gamo</option>
                                <option value="17">Mascott</option>
                                <option value="18">Mascar</option>
                                <option value="19">Mandroseza</option>
                                <option value="20">Betongolo</option>
                                <option value="21">67Ha</option>
                                <option value="22">119</option>
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
				var x = document.getElementById("aaaa").value;
                var y = document.getElementById("bbbb").value;
				if (x==y) {
					
							
							document.getElementById('cccc').innerHTML="taxi n° 4534 TRJ <br/> Frais:4000 Ar <br/> ";
				}
							else {
							document.getElementById('cccc').innerHTML="taxi n° 6743 ABJ <br/> Frais: 5000Ar";
						}

			}}
			>Taxi list</button>
			<div id='cccc'></div>
		</center>	
	</div>

		
		
			
	</form>

		
	)

	
}
export default Menu