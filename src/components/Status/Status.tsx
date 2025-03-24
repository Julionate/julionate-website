import { useSignal } from "@preact/signals";
import { useTranslations } from "../../i18n/utils";
import { languages } from "../../i18n/ui";
import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

export const Status = ({ lang }: { lang: keyof typeof languages }) => {
  const available = useSignal<boolean>(false);
  const t = useTranslations(lang);

  dayjs.extend(utc);
  dayjs.extend(timezone);

  const fromHour = dayjs.tz("2025-03-23 11:00", "America/Santiago");
  const toHour = dayjs.tz("2025-03-23 17:00", "America/Santiago");

  const fromLocalHour = fromHour.local().hour();
  const toLocalHour = toHour.local().hour();
  const currentLocalHour = dayjs.tz(undefined, dayjs.tz.guess()).hour();

  available.value =
    currentLocalHour >= fromLocalHour && currentLocalHour <= toLocalHour
      ? true
      : false;

  if (!available.value) {
    return (
      <div class="w-max h-max bg-red-500/10 rounded-full px-2 py-1 flex items-center gap-2">
        <div class="w-3 h-3 rounded-full bg-red-400" />
        <span class="text-red-900 dark:text-red-600 font-medium">
          {t("available.off")}
        </span>
      </div>
    );
  }

  return (
    <div class="w-max h-max bg-success/10 rounded-full px-2 py-1 flex items-center gap-2 select-none shadow-lg">
      <div class="w-3 h-3 rounded-full bg-success" />
      <span class="text-success font-medium">{t("available.on")}</span>
    </div>
  );
};
