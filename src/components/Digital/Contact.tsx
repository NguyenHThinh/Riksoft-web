import React from "react";
import BudgetRange from "@/components/Contact/BudgetRange";
import { sendToContactChannelSlack } from "@/services/slack";
import { useLocales } from "@/locales";
import AppImage from "@components/AppImage";

import Parser from "html-react-parser";
import Link from "next/link";
import { PATH_PAGE } from "@/routes/paths";
interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  option: string;
  message: string;
  budgets: string;
}

const Contact = () => {
  const { t } = useLocales(["contact", "services"]);

  const [isOpenModal, setIsOpenModal] = React.useState(false);

  const [formData, setFormdata] = React.useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    option: "",
    message: "",
    budgets: "",
  });

  // clear input after submited
  const handleClearForm = () => {
    setIsOpenModal(true);
    setFormdata({
      name: "",
      email: "",
      phone: "",
      company: "",
      option: "",
      message: "",
      budgets: "",
    });
  };

  const handleFormChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormdata((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
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
            ts: new Date().valueOf(),
          },
        ],
        blocks: [
          {
            type: "context",
            elements: [
              {
                type: "plain_text",
                text: `Consultation: ${formData.option}`,
              },
            ],
          },
          {
            type: "context",
            elements: [
              {
                type: "plain_text",
                text: `Company: ${formData.company}`,
              },
            ],
          },
          {
            type: "context",
            elements: [
              {
                type: "plain_text",
                text: `Budget: ${formData.budgets}`,
              },
            ],
          },
          {
            type: "context",
            elements: [
              {
                type: "plain_text",
                text: `Phone number: ${formData.phone}`,
              },
            ],
          },
          {
            type: "context",
            elements: [
              {
                type: "plain_text",
                text: `Message: ${formData.message}`,
                emoji: true,
              },
            ],
          },
          {
            type: "actions",
            elements: [
              {
                type: "button",
                text: {
                  type: "plain_text",
                  text: "Đã xử lý",
                  emoji: true,
                },
                value: "click_me_123",
                action_id: "actionId-0",
              },
              {
                type: "button",
                text: {
                  type: "plain_text",
                  text: "Chưa xử lý",
                  emoji: true,
                },
                value: "click_me_111",
                action_id: "actionId-1",
              },
            ],
          },
        ],
      };

      const res = await sendToContactChannelSlack(slackData);

      if (res.status === 200) {
        setIsOpenModal(true);
      }

      if (!res) return;
    } catch (e) {
      console.log(e);
    }
  };

  React.useEffect(() => {
    if (!isOpenModal) return;
    let timer = setTimeout(() => {
      setIsOpenModal(false);
    }, 4000);
    return () => {
      clearTimeout(timer);
    };
  }, [isOpenModal]);

  return (
    <section className="contact section-padding bg-gradient style-1">
      {/* modal */}
      <div
        className={`modal fade ${isOpenModal ? "show" : ""}`}
        id="submitSuccess"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="submitSuccess"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{t("contact:modal.title")}</h5>
              <button
                type="button"
                className="modal-close"
                onClick={() => setIsOpenModal(false)}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">{t("contact:modal.message")}</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setIsOpenModal(false)}
              >
                OK
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* end modal */}
      <div className="container">
        <div className="section-head mb-60 text-center">
          <h6 className="text-uppercase wow fadeInUp text-light">
            {t("common:contactUs")}
          </h6>
          <h2 className="wow fadeInUp text-light">
            {Parser(t("contact:requestFreeConsultant"))}
          </h2>
        </div>
        <div className="content">
          <div className="row justify-content-center">
            <div className="col-lg-5">
              <div className="contact_info">
                <p className="wow fadeInUp">Zalo/Viber 24/7</p>
                <h4 className="wow fadeInUp text-light">(+84) 968.468.800</h4>
                <ul>
                  <li className="wow fadeInUp">
                    <strong>Email : </strong> contact@riksoft.vn
                  </li>
                  <li className="wow fadeInUp">
                    <strong>{t("common:workingHours")} : </strong>{" "}
                    {t("common:workingHoursValue")}
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 offset-lg-1">
              <form
                className="contact_form"
                onSubmit={(e) => {
                  e.preventDefault();
                  handleFormSubmit(e);
                  handleClearForm();
                }}
              >
                <div className="row gx-3">
                  <div className="col-lg-6">
                    <div className="form-group mb-3 wow fadeInUp">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder={t("contact:label.name")}
                        onChange={handleFormChange}
                        value={formData.name}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group mb-3 wow fadeInUp">
                      <input
                        type="text"
                        name="email"
                        className="form-control"
                        placeholder={t("contact:label.email")}
                        onChange={handleFormChange}
                        value={formData.email}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group mb-3 wow fadeInUp">
                      <input
                        type="text"
                        name="phone"
                        className="form-control"
                        placeholder={t("contact:label.phone")}
                        onChange={handleFormChange}
                        value={formData.phone}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group mb-3 wow fadeInUp">
                      <input
                        type="text"
                        name="company"
                        className="form-control"
                        placeholder={t("contact:label.company")}
                        onChange={handleFormChange}
                        value={formData.company}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group mb-3 wow fadeInUp">
                      <select
                        className="form-select"
                        name="option"
                        onChange={handleFormChange}
                        value={formData.option || "Type of consultation"}
                      >
                        {/* cant set default bc func onchange just overwrite value only when change option */}
                        <option value="Type of consultation">
                          {t("contact:label.selection")}
                        </option>
                        <option value={t("services:service1.option1")}>
                          {t("services:service1.option1")}
                        </option>
                        <option value={t("services:service1.option2")}>
                          {t("services:service1.option2")}
                        </option>
                        <option value={t("services:service1.option3")}>
                          {t("services:service1.option3")}
                        </option>
                        <option value={t("services:service1.option4")}>
                          {t("services:service1.option4")}
                        </option>
                        <option value={t("services:service1.option5")}>
                          {t("services:service1.option5")}
                        </option>
                        <option value={t("services:service2.option1")}>
                          {t("services:service2.option1")}
                        </option>
                        <option value={t("services:service2.option2")}>
                          {t("services:service2.option2")}
                        </option>
                        <option value={t("services:service2.option3")}>
                          {t("services:service2.option3")}
                        </option>
                        <option value={t("services:service2.option4")}>
                          {t("services:service2.option4")}
                        </option>
                        <option value={t("services:service3.option1")}>
                          {t("services:service3.option1")}
                        </option>
                        <option value={t("services:service3.option2")}>
                          {t("services:service3.option2")}
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group mb-3 wow fadeInUp">
                      <textarea
                        rows={5}
                        className="form-control"
                        name="message"
                        placeholder={t("contact:label.message")}
                        onChange={handleFormChange}
                        value={formData.message}
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-lg-12 mb-3 text-light">
                    <BudgetRange handleBudgetChange={handleBudgetChange} />
                  </div>
                  <div className="col-lg-12">
                    <div className="form-check mb-4 wow fadeInUp">
                      <p className="form-check-label text-light small">
                        {t("contact:label.check")}{" "}
                        <Link href={PATH_PAGE.policy} className="text-decoration-underline">
                          {t("contact:label.privacyPolicy")}
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <input
                      type="submit"
                      value={t("contact:label.submit")}
                      className="btn btn-dark wow fadeInUp text-light fs-14px"
                    ></input>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <AppImage
        src="/assets/img/contact_globe.svg"
        alt=""
        width={714}
        height={1052}
        className="contact_globe"
      />
    </section>
  );
};

export default Contact;
