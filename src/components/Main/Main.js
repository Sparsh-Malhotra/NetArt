import trophy from "../../assets/1.png";
import tools from "../../assets/3.png";
import award from "../../assets/2.png";
import "./Main.css";

function Main() {
  return (
    <div className='container'>
      <div className='flex top-container'>
        <img src={trophy} className='trophy-img' alt='Trophy'></img>
        <div className='right-container'>
          <p>
            <strong>
              C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
              the 4th time.
            </strong>
          </p>
          <ul>
            <li>
              C.R.I.'s energy efficient products are well recognized by various
              Government Institutions, as trustworthy products for various
              projects across the globe to save energy.
            </li>
            <li>
              C.R.I. is the highest contributor in the country for the projects
              of EESL (Energy Efficiency Services Limited) to replace the old
              inefficient pumps with 5 Star rated energy efficient smart pumps
              with IoT enabled control panel.
            </li>
          </ul>
          <img src={award} className='award-img' alt='Award'></img>
          <p>
            Government of India has awarded the "National Energy Conservation
            Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I.
            Group received the award from Smt. Sumitra Mahajan, Speaker of Lok
            Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
          </p>
        </div>
      </div>
      <p>
        INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING
        IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE
        NATION.
      </p>
      <div className='bottom-container'>
        <img src={tools} className='tools-img' alt='Tools'></img>
        <p>
          Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
          Solar Systems - Motors
        </p>
        <hr></hr>
        <h4>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h4>
        <div className="bottom-text">
          CHEMICALS & PROCESS <hr className='seperator'></hr> POWER{" "}
          <hr className='seperator'></hr> WATER & WASTE WATER{" "}
          <hr className='seperator'></hr> OILS & GAS{" "}
          <hr className='seperator'></hr> PHARMA <hr className='seperator'></hr>{" "}
          SUGARS & DISTILLERIES <hr className='seperator'></hr> PAPER & PULP{" "}
          <hr className='seperator'></hr> MARINE & DEFENCE{" "}
          <hr className='seperator'></hr> METAL & MINING{" "}
          <hr className='seperator'></hr> FOOD & BEVERAGE{" "}
          <hr className='seperator'></hr> PETROCHEMICAL & REFINERIES{" "}
          <hr className='seperator'></hr> SOLAR <hr className='seperator'></hr>{" "}
          BUILDING <hr className='seperator'></hr> HVAC FIRE FIGHTING{" "}
          <hr className='seperator'></hr>
          AGRICULTURE & RESIDENTIAL
        </div>
      </div>
    </div>
  );
}

export default Main;
