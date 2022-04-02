import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import BasicSelect from "./Countryselect";
export const Mobileverification = () => {
  return (
    <div className="salonathomediv">
      <div>
        <div>
          <ArrowBackIcon />
        </div>
        <div style={{ marginLeft: "5%" }}>Salon at Home</div>
      </div>
      <div>
        <BasicSelect />
      </div>
    </div>
  );
};
