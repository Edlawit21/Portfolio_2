import type { SocialLink } from '../data/siteData'

type Props = {
  name: string
  blurb: string
  socialLinks: SocialLink[]
}

export default function Footer({ name, blurb, socialLinks }: Props) {
  return (
    <footer id="footer" className="footer light-background">
      <div className="container">
        <h3 className="sitename">{name}</h3>
        <p>{blurb}</p>
        <div className="social-links d-flex justify-content-center">
          {socialLinks.map((s) => (
            <a
              key={s.href}
              href={s.href}
              aria-label={s.label}
              target={s.targetBlank ? '_blank' : undefined}
              rel={s.targetBlank ? 'noreferrer' : undefined}
            >
              <i className={s.iconClass} />
            </a>
          ))}
        </div>
        <div className="container">
          <div className="copyright">
            <span>Copyright</span> <strong className="px-1 sitename">{name}</strong> <span>All Rights Reserved</span>
          </div>
          <div className="credits">
            Designed by <a href="https://personal-portfolio-lt7x.onrender.com">Amanuel Temesgen</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

