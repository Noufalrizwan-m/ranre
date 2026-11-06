
export default function Contact() {
  return (
    <section className={"contact silk"} id={"contact"}>
      <div className={"contact-inner"}>
        <div className={"contact-heading"}>
          <p className={"eyebrow"}>
            {"LET’S START A CONVERSATION"}
          </p>
          <h2>
            {"LET’S FIND THE"}
            <br />
            {"RIGHT SPACE."}
          </h2>
          <p>
            {"Tell us what you’re looking for, and start a conversation with our team."}
          </p>
          <div className={"contact-details"}>
            <a href={"mailto:Dhastagirahamed@ranre.ae"}>
              {"Dhastagirahamed@ranre.ae ↗"}
            </a>
            <a href={"tel:+971503469052"}>
              {"+971 50 346 9052 ↗"}
            </a>
            <span>
              {"Al Murar Residence, Al Murar, Dubai, UAE"}
            </span>
          </div>
        </div>
        <form id={"enquiry-form"}>
          <label>
            <span className={"field-title"}>
              {"Full name "}
              <b aria-hidden={"true"}>
                {"*"}
              </b>
            </span>
            <input name={"name"} required autoComplete={"name"} minLength={"2"} maxLength={"120"} />
          </label>
          <label>
            <span className={"field-title"}>
              {"Company name"}
            </span>
            <input name={"company"} autoComplete={"organization"} maxLength={"120"} />
          </label>
          <label>
            <span className={"field-title"}>
              {"Email address "}
              <b aria-hidden={"true"}>
                {"*"}
              </b>
            </span>
            <input name={"email"} type={"email"} required autoComplete={"email"} maxLength={"254"} />
          </label>
          <label>
            <span className={"field-title"}>
              {"Phone number "}
              <b aria-hidden={"true"}>
                {"*"}
              </b>
            </span>
            <span className={"phone-field"} dir={"ltr"}>
              <span className={"code-picker"}>
                <select name={"country"} aria-label={"Country calling code"} tabIndex={"-1"} aria-hidden={"true"} />
                <button type={"button"} className={"dial-button"} aria-label={"Country calling code"} aria-expanded={"false"} aria-controls={"country-list"}>
                  <span className={"dial-display"}>
                    {"+971"}
                  </span>
                </button>
                <span className={"country-panel"} hidden>
                  <input type={"search"} className={"country-search"} aria-label={"Search countries"} placeholder={"Search countries"} autoComplete={"off"} />
                  <span className={"country-options"} id={"country-list"} role={"listbox"} aria-label={"Countries"} />
                  <span className={"country-empty"} hidden>
                    {"No countries found."}
                  </span>
                </span>
              </span>
              <input name={"phone"} type={"tel"} required autoComplete={"tel-national"} inputMode={"tel"} maxLength={"24"} aria-describedby={"phone-hint"} />
            </span>
            <small id={"phone-hint"}>
              {"Enter a valid phone number."}
            </small>
          </label>
          <label className={"field-wide"}>
            <span className={"field-title"}>
              {"What kind of space do you need? "}
              <b aria-hidden={"true"}>
                {"*"}
              </b>
            </span>
            <select name={"space"} required>
              <option value={""}>
                {"Select an option"}
              </option>
              <option value={"Workforce accommodation"}>
                {"Workforce accommodation"}
              </option>
              <option value={"Corporate facilities"}>
                {"Corporate facilities"}
              </option>
              <option value={"Commercial property"}>
                {"Commercial property"}
              </option>
              <option value={"Property management"}>
                {"Property management"}
              </option>
              <option value={"Other"}>
                {"Other"}
              </option>
            </select>
          </label>
          <label className={"field-wide"}>
            <span className={"field-title"}>
              {"Tell us about your requirements "}
              <b aria-hidden={"true"}>
                {"*"}
              </b>
            </span>
            <textarea name={"requirements"} rows={"3"} required minLength={"3"} maxLength={"2000"} placeholder={"Location, capacity, or anything else we should know"} />
          </label>
          <button className={"gold-button"} type={"submit"}>
            {"PREPARE ENQUIRY "}
            <span aria-hidden={"true"}>
              {"↗"}
            </span>
          </button>
          <p className={"form-note"}>
            {"This opens your email app with your enquiry for you to review and send."}
          </p>
        </form>
      </div>
    </section>
  );
}
