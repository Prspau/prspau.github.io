import { links, profile } from "@/data/portfolio";
import Icon from "@/components/ui/Icon";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 sm:flex-row">
        <p className="text-sm text-slate-500">
          © {year} {profile.name}
        </p>

        <div className="flex items-center gap-3">
          {[
            { href: links.github, name: "github" as const, label: "GitHub" },
            { href: links.linkedin, name: "linkedin" as const, label: "LinkedIn" },
            { href: `mailto:${links.email}`, name: "mail" as const, label: "Email" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.name === "mail" ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={s.label}
              className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-slate-400 transition-colors hover:border-cyan/50 hover:text-cyan"
            >
              <Icon name={s.name} className="h-4.5 w-4.5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
