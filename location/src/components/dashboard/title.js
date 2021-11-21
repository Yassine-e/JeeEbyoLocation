import "../css/dashboard.css";
import BarChartIcon from "@mui/icons-material/BarChart";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

function Title(props) {
  if (props.title1 == null) {
    return null;
  } else
    return (
      <div>
        <div className="Paper1">
          <div className="TitlePaper">
            Dashboard
            <br />
            <label className="TitlePaper2">
              <strong>{props.statitique}</strong>
            </label>
          </div>
          <BarChartIcon style={{ fontSize: "30px" }} />
        </div>
        <div className="Paper2 row">
          <div className="static col ">
            <label className="staticTitle">{props.title1.name}</label>
            <br />
            <label className="staticNbr">{props.title1.total}</label>
            <br />
            <label className="staticTitle2">
              <ArrowDropUpIcon />
              {props.title1.time}
            </label>
          </div>
          <div className="static col">
            <label className="staticTitle">{props.title2.name}</label>
            <br />
            <label className="staticNbr">{props.title2.total}</label>
            <br />
            <label className="staticTitle2">
              <ArrowDropUpIcon />
              {props.title2.time}
            </label>
          </div>
          <div className="static col">
            <label className="staticTitle">{props.title3.name}</label>
            <br />
            <label className="staticNbr">{props.title3.total}</label>
            <br />
            <label className="staticTitle2">
              <ArrowDropUpIcon />
              {props.title3.time}
            </label>
          </div>
          <div className="static col">
            <label className="staticTitle">{props.title4.name}</label>
            <br />
            <label className="staticNbr">{props.title4.total}</label>
            <br />
            <label className="staticTitle2">
              <ArrowDropUpIcon />
              {props.title4.time}
            </label>
          </div>
        </div>
      </div>
    );
}

export default Title;
