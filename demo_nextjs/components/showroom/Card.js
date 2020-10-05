import Link from 'next/link';

export default function Card({sample}) {
  return (
    <div style={{pointerEvents: (sample.special == 'no-pointer-events' ? 'none' : 'initial')}}>
      <Link href={'/showroom/'+sample.slug}>
        <div className="Card">
          <div className="preview-wrapper">
            <div className="preview-static" style={{ backgroundImage: 'url(/demos/'+sample.path+'.jpg)'}}></div>
            <div className="btn-open"></div>
          </div>

          <div className="text-wrapper">
            <div className="meta-title">DEMO</div>
            <Link href={'/showroom/'+sample.slug}>{sample.title}</Link>
          </div>
        </div>
      </Link>
    </div>
  )
}