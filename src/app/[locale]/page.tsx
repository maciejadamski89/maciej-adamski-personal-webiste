import { useTranslations } from "next-intl";
import LocaleSwitcher from "@/components/locale-switcher";

// Since this component doesn't use any interactive features
// from React, it can be run as a Server Component.

export default function Index() {
    const t = useTranslations("Index");
    return (
        <>
            <h1 className="text-gray-900">{t("title")}</h1>;
        </>
    );
}
