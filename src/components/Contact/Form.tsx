import { ChangeEvent, useState } from "react";
import contactInfo from "@data/Contact/form.json";
import { sendToContactChannelSlack } from "@/services/slack";
import BudgetRange from "./BudgetRange";

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  option: string;
  budgets: string;
}

interface Props {
  style: string;
}

const Form: React.FC<Props> = ({ style }) => {
  const [formData, setFormdata] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    option: "",
    budgets: "",
  });

  const handleFormChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormdata((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleBudgetChange = (value: string) => {
    setFormdata((prev) => ({
      ...prev,
      budgets: value,
    }));
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const formValues = new FormData();

      Object.entries(formData).forEach(([key, value]) => {
        formValues.append(key, value);
      });

      const slackData = {
        attachments: [
          {
            fallback: `${formData?.name} send contact form from https://riksoft.vn/contact`,
            color: "#36a64f",
            author_name: formData?.name,
            author_link: "https://riksoft.vn",
            author_icon: "https://cdn.riksoft.vn/logo-riksoft-company.png",
            title: `${formData?.name} - ${formData?.email}`,
            title_link: "https://riksoft.vn/contact",
            company_name: `${formData.company}`,
            consultation: `${formData.option}`,
            bugets: `${formData.budgets}`,
            ts: new Date().valueOf(),
          },
        ],
      };

      const res = await sendToContactChannelSlack(slackData);

      console.log(res.status);

      if (!res) return;
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <section
      className={`contact section-padding pt-${style === "4" ? "0" : "50"} style-6`}
    >
      {style === "5" && (
        <>
          <div className="section-head text-center mb-100 style-5">
            <h2 className="mb-20">Get In Touch</h2>
            <p>We will contact again after receive your request in 24h</p>
          </div>
          <div className="text-center mb-100">
            <h2 className="ltspc-20 text-uppercase fs-1 lh-1 mb-50 mt-30 color-blue5">
              {contactInfo.phone}
            </h2>
            <h4 className="fw-normal mb-20 color-000">{contactInfo.email}</h4>
            <h4 className="fw-normal mb-10 color-000">{contactInfo.address}</h4>
          </div>
        </>
      )}
      <div className="container">
        <div className="content">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <form
                action="contact.php"
                className="form"
                method="post"
                onSubmit={handleFormSubmit}
              >
                <p className="text-center text-danger fs-12px mb-30">
                  The field is required mark as *
                </p>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group mb-20">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        onChange={handleFormChange}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group mb-20">
                      <input
                        type="text"
                        name="email"
                        className="form-control"
                        placeholder="Email Address *"
                        onChange={handleFormChange}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group mb-20">
                      <input
                        type="text"
                        name="phone"
                        className="form-control"
                        placeholder="Phone Number (option)"
                        onChange={handleFormChange}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group mb-20">
                      <input
                        type="text"
                        name="company"
                        className="form-control"
                        placeholder="Your Company (option)"
                        onChange={handleFormChange}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group mb-20">
                      <select
                        className="form-select"
                        defaultValue="Web Development"
                        name="option"
                        onChange={handleFormChange}
                      >
                        <option value="Web Development">Web Development</option>
                        <option value="option 2">option 2</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <BudgetRange handleBudgetChange={handleBudgetChange} />
                  </div>
                  <div className="col-lg-12 text-center">
                    <div className="form-check d-inline-flex mt-30 mb-30">
                      <input
                        className="form-check-input me-2 mt-0"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label small"
                        htmlFor="flexCheckDefault"
                      >
                        By submitting, i'm agreed to the{" "}
                        <a href="#" className="text-decoration-underline">
                          Terms & Conditons
                        </a>
                      </label>
                    </div>
                  </div>
                  <div className="col-lg-12 text-center">
                    <input
                      type="submit"
                      value="Send Your Request"
                      className="btn rounded-pill blue5-3Dbutn hover-blue2 sm-butn fw-bold text-light"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
          <img
            src="/assets/img/icons/contact_a.png"
            alt=""
            className="contact_a"
          />
          <img
            src="/assets/img/icons/contact_message.png"
            alt=""
            className="contact_message"
          />
        </div>
      </div>
    </section>
  );
};

export default Form;
