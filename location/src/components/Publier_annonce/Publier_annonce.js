import React, { useState } from "react";
import Menu2 from "../AnnonceDescription/Menu2";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import "./css/publier_annonce.css";

import { styled } from "@material-ui/styles";

import { makeStyles } from "@material-ui/styles";
export const useStyles = makeStyles((theme) => ({
  stepLabel: {
    color: "#1488CC",
  },
}));

const containerStyle = {
  width: "700px",
  height: "400px",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};
function Publier_annonce() {
  const StyledStepLabel = styled(StepLabel)({
    "& .MuiStepLabel-active": {
      color: "#1488CC",
    },
  });

  const [ActiveStep, setActiveStep] = useState(0);
  const nextStep = () => {
    if (ActiveStep < 2) {
      setActiveStep((currentStep) => currentStep + 1);
    }
  };
  const previousStep = () => {
    if (ActiveStep !== 0) {
      setActiveStep((currentStep) => currentStep - 1);
    }
  };

  {
    /*const renderAuthButton = () => {
    if (ActiveStep === 0) {
      return <button>Logout</button>;
    } else {
      return <button>Login</button>;
    }
  };*/
  }

  return (
    <div className="publieer">
      <Menu2 />
      <div className="interval"></div>
      <Stepper activeStep={ActiveStep}>
        <Step>
          <StyledStepLabel disabled>First</StyledStepLabel>
        </Step>
        <Step>
          <StyledStepLabel disabled>second</StyledStepLabel>
        </Step>
        <Step>
          <StyledStepLabel disabled>third</StyledStepLabel>
        </Step>
      </Stepper>
      <div
        className="step1"
        style={{ display: ActiveStep === 0 ? "" : "none" }}
      >
        <div className="phase1">
          <form>
            <h5>Type de bien</h5>
            <hr className="reactta" />
            <div className="myflexa"></div>
            <br /> <br />
            <div className="typebien">
               {" "}
              <input type="radio" id="html" name="fav_language" value="HTML" />
                <label for="html">Appartement</label>
              <br />
                <input type="radio" id="css" name="fav_language" value="CSS" />
                <label for="css">Maison</label>
              <br /> {" "}
              <input
                type="radio"
                id="javascript"
                name="fav_language"
                value="JavaScript"
              />
                <label for="javascript">Villas</label>
            </div>
            <div className="myflexa">
              <h5>Emplacement</h5>
              <hr className="reactta" />
            </div>
            <div className="intotwo">
              <div className="toform">
                <div className="form-group">
                    <label for="html">Adresse</label>
                  <input
                    type="text"
                    name="FirstName"
                    placeholder="Votre Adresse"
                  />
                </div>
                <br />
                <div className="form-group">
                    <label for="html">Région</label>
                  <select name="" id="">
                    <option value="Select Brand">Tanger-Tétouan</option>
                  </select>{" "}
                </div>
                <br />
                <div className="form-group">
                    <label for="html">Ville</label>
                  <select name="" id="">
                    <option value="Select Brand">Tétouan</option>
                  </select>
                </div>
              </div>
              <div className="tomap">
                <LoadScript googleMapsApiKey="AIzaSyA2cmH2dZXMtLSE8OwIAKJK8MQJUp6pA84">
                  <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={10}
                  >
                    <></>
                  </GoogleMap>
                </LoadScript>
              </div>
            </div>
          </form>
        </div>{" "}
        <br /> <br />
      </div>
      <div
        className="step2"
        style={{ display: ActiveStep === 1 ? "" : "none" }}
      >
        <div className="form-group">
            <label for="html">Surface:</label>
          <input type="number" name="FirstName" placeholder="En m²" />
        </div>
        <br />
        <div className="form-group">
            <label for="html">Prix:</label>
          <input type="number" name="FirstName" placeholder="En MAD" />
        </div>
      </div>
      <div
        className="step3"
        style={{ display: ActiveStep === 2 ? "" : "none" }}
      >
        <div className="myflexa">
          <h5>Upload photos</h5>
          <hr className="reactta" />
        </div>
        <div className="forupload">
          <div className="photoadd">
            <div class="input-file-container">
              <input class="input-file" id="my-file" type="file" />
              <FontAwesomeIcon
                icon={faPlusSquare}
                className="myicon"
                width="46px"
              />
            </div>
            <p class="file-return"></p>
          </div>
          <br /> <br />
          <div className="myflexa">
            <h5>Information de la publication</h5>
            <hr className="reactta" />
          </div>
          <div className="toflex">
            <div className="form-group">
                <label for="html">Titre:</label>
              <input
                type="text"
                name="FirstName"
                className="firstlargeinput"
                placeholder="Titre de votre annonce"
              />
            </div>
            <div className="form-group">
                <label for="html">Télephone:</label>
              <input
                type="number"
                name="FirstName"
                placeholder="votre numero portable"
              />
            </div>
          </div>
          <br />
          <div className="form-group">
              <label for="html">Description:</label>
            <textarea
              name="FirstName"
              id=""
              placeholder="Decrivez votre annonces..."
              cols="95"
              rows="4"
            ></textarea>
            <br /> <br />
          </div>
        </div>
      </div>
      <Button
        variant="outlined"
        className="interval"
        color="primary"
        style={{ display: ActiveStep === 0 ? "none" : "" }}
        onClick={() => previousStep()}
      >
        Previous Step
      </Button>
      <Button variant="outlined" color="primary" onClick={() => nextStep()}>
        {ActiveStep === 2 ? "Finish" : " Next Step"}
      </Button>
      <br /> <br />
    </div>
  );
}

export default Publier_annonce;
