import Link from "next/link";

interface TrackCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  tag?: string;
  link?: string;
}

export default function TrackCard({ 
  title, 
  description, 
  imageSrc, 
  imageAlt, 
  tag,
  link = "/projects" 
}: TrackCardProps) {
  return (
    <div className="project-card reveal is-visible">
      <div className="project-img-wrapper">
        <img src={imageSrc} alt={imageAlt} loading="lazy" className="project-img" />
      </div>
      <div className="project-content">
        {tag && <span className="project-tag">{tag}</span>}
        <h4>{title}</h4>
        <p>{description}</p>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "auto", paddingTop: "15px" }}>
          <Link href={link} className="project-link">
            View Project Track &rarr;
          </Link>
          <Link href="/apply" className="btn">
            Select Track
          </Link>
        </div>
      </div>
    </div>
  );
}
