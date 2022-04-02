import ArrowBackIcon from "@mui/icons-material/ArrowBack";
export const Salonathome = () => {
  const phoneimg = {
    flagImg:
      "",
  };
  return (
    <div className="salonathomediv">
      <div>
        <div>
          <ArrowBackIcon />
        </div>
        <div style={{ marginLeft: "5%" }}>Salon at Home</div>
      </div>
      <div>
        <div className="phonetwodiv">
          <div className="countryselectbox">
            <select id="country">
              <option value="" hidden>
                Select Country
              </option>
              <option data-countryCode="af" value="93">
                Afghanistan (+93)
              </option>
              <option data-countryCode="al" value="355">
                Albania (+355)
              </option>
              <option data-countryCode="dz" value="213">
                Algeria (+213)
              </option>
              <option data-countryCode="as" value="1684">
                American Samoa (+1684)
              </option>
              <option data-countryCode="ad" value="376">
                Andorra (+376)
              </option>
              <option data-countryCode="ao" value="244">
                Angola (+244)
              </option>
              <option data-countryCode="ai" value="1264">
                Anguilla (+1264)
              </option>
              <option data-countryCode="aq" value="672">
                Antartica (+672)
              </option>
              <option data-countryCode="ag" value="1268">
                Antigua &amp; Barbuda (+1268)
              </option>
              <option data-countryCode="ar" value="54">
                Argentina (+54)
              </option>
              <option data-countryCode="am" value="374">
                Armenia (+374)
              </option>
              <option data-countryCode="aw" value="297">
                Aruba (+297)
              </option>
              <option data-countryCode="au" value="61">
                Australia (+61)
              </option>
              <option data-countryCode="at" value="43">
                Austria (+43)
              </option>
              <option data-countryCode="az" value="994">
                Azerbaijan (+994)
              </option>
              <option data-countryCode="bz" value="1242">
                Bahamas (+1242)
              </option>
              <option data-countryCode="bh" value="973">
                Bahrain (+973)
              </option>
              <option data-countryCode="bd" value="880">
                Bangladesh (+880)
              </option>
              <option data-countryCode="bb" value="1246">
                Barbados (+1246)
              </option>
              <option data-countryCode="by" value="375">
                Belarus (+375)
              </option>
              <option data-countryCode="be" value="32">
                Belgium (+32)
              </option>
              <option data-countryCode="bz" value="501">
                Belize (+501)
              </option>
              <option data-countryCode="bj" value="229">
                Benin (+229)
              </option>
              <option data-countryCode="bm" value="1441">
                Bermuda (+1441)
              </option>
              <option data-countryCode="bt" value="975">
                Bhutan (+975)
              </option>

              <option data-countryCode="in" value="91">
                India (+91)
              </option>
            </select>
          </div>
          <div>
            <input
              type="tel"
              className="tel"
              placeholder="ENTER YOUR PHONE NUMBER"
            />
          </div>
        </div>
        <div>
          {" "}
          <button className="phonecontinue">continue</button>
        </div>
      </div>
    </div>
  );
};
