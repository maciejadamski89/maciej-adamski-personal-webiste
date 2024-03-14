"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation"; // Correct import for useRouter
import { localeNames, locales } from "@/i18nconfig";

export default function LocaleSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathName = usePathname();

    const switchLocale = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newLocale = e.target.value;
        const newPath = pathName.replace(`/${locale}`, `/${newLocale}`);
        console.log({ pathName, newPath });
        router.push(newPath);
    };

    return (
        <div>
            <select value={locale} onChange={switchLocale}>
                {locales.map((loc) => (
                    <option key={loc} value={loc}>
                        {localeNames[loc]}
                    </option>
                ))}
            </select>
        </div>
    );
}
