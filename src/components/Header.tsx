import { useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import type { NavItem, SocialLink } from "../data/siteData";

type Props = {
  name: string;
  profileImage: string;
  navItems: NavItem[];
  socialLinks: SocialLink[];
  activeSectionId?: string | null;
};

function NavHref({
  href,
  children,
  className,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  const location = useLocation();
  const isOnHome = location.pathname === "/";

  if (href.startsWith("/#")) {
    return isOnHome ? (
      <a href={href.replace("/#", "#")} className={className} onClick={onClick}>
        {children}
      </a>
    ) : (
      <Link to={href} className={className} onClick={onClick}>
        {children}
      </Link>
    );
  }

  if (href.startsWith("#")) {
    return isOnHome ? (
      <a href={href} className={className} onClick={onClick}>
        {children}
      </a>
    ) : (
      <Link to={`/${href}`} className={className} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <Link to={href} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}

export default function Header({
  name,
  profileImage,
  navItems,
  socialLinks,
  activeSectionId,
}: Props) {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const headerClass = useMemo(() => {
    const base =
      "header dark-background d-flex flex-column justify-content-between";
    return isOpen ? `${base} header-show` : base;
  }, [isOpen]);

  const onNavigate = () => {
    if (isOpen) setIsOpen(false);
  };

  return (
    <header id="header" className={headerClass}>
      <button
        type="button"
        className={`header-toggle d-xl-none bi ${isOpen ? "bi-x" : "bi-list"}`}
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((v) => !v)}
      />

      <div className="header-top">
        <div className="profile-img">
          <img
            src={profileImage}
            alt={`${name} profile`}
            className="img-fluid"
          />
        </div>

        <Link
          to="/"
          className="logo d-flex align-items-center justify-content-center text-decoration-none"
          onClick={onNavigate}
        >
          <h1 className="sitename">{name}</h1>
        </Link>
      </div>

      <nav id="navmenu" className="navmenu" aria-label="Primary">
        <ul>
          {navItems.map((item) => {
            if (item.type === "link") {
              const sectionId = item.href.startsWith("/#")
                ? item.href.slice(2)
                : null;
              const isActive =
                location.pathname === "/" &&
                sectionId &&
                activeSectionId === sectionId;

              return (
                <li key={item.href}>
                  <NavHref
                    href={item.href}
                    className={isActive ? "active" : undefined}
                    onClick={onNavigate}
                  >
                    <i className={`${item.iconClass} navicon`} />
                    {item.label}
                  </NavHref>
                </li>
              );
            }

            const key = item.label;
            const expanded = openDropdown === key;

            return (
              <li key={key} className={`dropdown${expanded ? " active" : ""}`}>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenDropdown((v) => (v === key ? null : key));
                  }}
                >
                  <i className={`${item.iconClass} navicon`} />{" "}
                  <span>{item.label}</span>{" "}
                  <i
                    className={`bi bi-chevron-down toggle-dropdown${expanded ? " active" : ""}`}
                  />
                </a>
                <ul className={expanded ? "dropdown-active" : undefined}>
                  {item.children.map((c) => (
                    <li key={c.label}>
                      <NavHref href={c.href} onClick={onNavigate}>
                        {c.label}
                      </NavHref>
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="social-links text-center">
        {socialLinks.map((s) => (
          <a
            key={s.href}
            href={s.href}
            aria-label={s.label}
            target={s.targetBlank ? "_blank" : undefined}
            rel={s.targetBlank ? "noreferrer" : undefined}
          >
            <i className={s.iconClass} />
          </a>
        ))}
      </div>
    </header>
  );
}
