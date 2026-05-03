import Link from "next/link";

export default function ActionCardHostingVps() {
  return (
    <div className="section section-action-card section-action-card-hosting">
      <div className="card-action card-action-hosting">
        <h2 className="section-title">Ready to Launch Your Website?</h2>
        <p className="color-white font-size-medium">Power your website with fast, secure, and reliable hosting infrastructure.</p>
        <div className="flex-container gap">
          <Link className="button" href="/hosting/web-hosting">View Hosting Plans</Link>
          <Link className="button" href="/vps/kvm-vps">Explore VPS Server</Link>
        </div>
      </div>
    </div>
  );
}