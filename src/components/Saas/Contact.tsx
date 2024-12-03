import React, { ChangeEvent, useEffect, useState } from "react";
import BudgetRange from "@/components/Contact/BudgetRange";
import { sendToContactChannelSlack } from "@/services/slack";
import { useLocales } from "@/locales";
import AppImage from "../AppImage";
import { PATH_PAGE } from "@/routes/paths";
import Link from "next/link";

interface ContactForm {
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

  const [isOpenModal, setIsOpenModal] = useState(false);

  const [formData, setFormdata] = useState<ContactForm>({
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
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
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

  //auto close modal after 4s
  useEffect(() => {
    if (!isOpenModal) return;
    let timer = setTimeout(() => {
      setIsOpenModal(false);
    }, 4000);
    return () => {
      clearTimeout(timer);
    };
  }, [isOpenModal]);

  return (
    <section className="contact section-padding border-bottom border-1 brd-gray style-6">
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
      <div className="container">
        <div className="section-head text-center mb-70 style-5">
          <h2 className="mb-20">{t("contact:title")}</h2>
          <p>{t("contact:desc")}</p>
        </div>

        <div className="content">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <form
                className="form"
                onSubmit={(e) => {
                  e.preventDefault();
                  handleFormSubmit(e);
                  handleClearForm();
                }}
              >
                <p className="text-center text-danger fs-12px mb-30">
                  {t("contact:required")}
                </p>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group mb-20">
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
                    <div className="form-group mb-20">
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
                    <div className="form-group mb-20">
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
                    <div className="form-group mb-20">
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
                    <div className="form-group mb-20">
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
                    <div className="col-lg-12 mb-20">
                      <div className="form-group">
                        <textarea
                          rows={10}
                          className="form-control"
                          name="message"
                          placeholder={t("contact:label.message")}
                          onChange={handleFormChange}
                          value={formData.message}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <BudgetRange handleBudgetChange={handleBudgetChange} />
                  </div>
                  <div className="col-lg-12 text-center">
                    <div className="form-check d-inline-flex mt-30 mb-30">
                      <p>
                        {`${t("contact:label.check")} `}
                        <Link href={PATH_PAGE.policy} className="text-decoration-underline">
                          {t("contact:label.privacyPolicy")}
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-12 text-center">
                    <input
                      type="submit"
                      value={t("contact:label.submit")}
                      className={`btn rounded-pill main5-3Dbutn sm-butn fw-bold text-light`}
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
          <AppImage
            width={205}
            height={270}
            quality={100}
            src="/assets/img/icons/contact_a.png"
            alt=""
            className="contact_a"
          />
          <AppImage
            width={342}
            height={342}
            quality={100}
            src="/assets/img/icons/contact_message.png"
            alt=""
            className="contact_message"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
