import useTranslation from "next-translate/useTranslation";
import Balancer from "react-wrap-balancer";
import { IconBrandGithub, IconCircleCheck } from "@tabler/icons";
import Link from "next/link";
import { motion } from "framer-motion";

import Layout from "../components/layouts/index";

const FADE_IN_VARIANT = {
  hidden: { opacity: 0, y: -10 },
  show: { opacity: 1, y: 0, transition: { type: "spring" } },
};

function Footer() {
  return (
    <div className="absolute bottom-0 w-full border-t border-gray-200 bg-white py-5 text-center">
      <p className="text-gray-500">Some stuff in here</p>
    </div>
  );
}

function Index() {
  const { t } = useTranslation("common");

  return (
    <Layout footer={<Footer />}>
      <motion.div
        initial="hidden"
        whileInView="show"
        animate="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
        className="absolute top-0 flex h-screen w-full items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-cyan-100 pb-32"
      >
        <div className="flex max-w-4xl flex-col items-center gap-10 px-5 xl:px-0">
          <motion.h1
            className="pt-10 text-center text-4xl font-bold text-black drop-shadow-sm md:text-7xl"
            variants={FADE_IN_VARIANT}
          >
            {t("pricing.title")}
          </motion.h1>

          <motion.p
            className="text-center text-gray-500 drop-shadow-sm md:text-xl"
            variants={FADE_IN_VARIANT}
          >
            <Balancer>{t("pricing.description")}</Balancer>
          </motion.p>

          <motion.div
            className="flex w-full flex-col gap-3 rounded-xl bg-white p-5 shadow-2xl md:w-3/4 md:max-w-md"
            variants={FADE_IN_VARIANT}
          >
            <p className="text-3xl font-bold">Pro</p>

            <p className="text-6xl">
              $5 <span className="text-xs">/ {t("month")}</span>
            </p>

            <p className="text-sm text-gray-500">{t("pricing.value-proposition")}</p>

            <Link
              href="https://github.com/apps/evergreen-docs"
              className=" text-bold flex w-full items-center justify-center space-x-2 rounded-full border border-black bg-black px-5 py-2 text-sm text-white shadow-md transition-colors hover:bg-white hover:text-black"
              target="_blank"
              rel="noreferrer"
            >
              <IconBrandGithub size={20} />
              <p>{t("install-app-button")}</p>
            </Link>

            <ul className="flex flex-col gap-2 text-sm">
              {Object.values(t("pricing.features", {}, { returnObjects: true })).map(
                (feature, index) => (
                  <li className="inline-flex items-center gap-1" key={index}>
                    <IconCircleCheck className="text-emerald-500" />
                    {feature}
                  </li>
                )
              )}
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </Layout>
  );
}

export default Index;
