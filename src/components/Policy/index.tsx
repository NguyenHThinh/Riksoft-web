import { useLocales } from "@/locales";
import React from "react";
import Parser from "html-react-parser";


const Policy = () => {
    const { t } = useLocales(["common", "policy"]);

    return (
        <section className="pt-50 pb-50">
            <div className="container">
                <div className={`section-head text-center style-5 mb-60`}>
                    <h2 className="mb-20">
                        {Parser(t("policy:ourPrivacyPolicy"))}
                    </h2>
                </div>
                {Parser(t('policy:policyContent'))}
            </div>
        </section>
    );
};

export default Policy;
